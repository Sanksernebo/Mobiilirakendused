import React, {useEffect} from "react";
import { Image } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/SignUp/Signup";
import SignIn from "./src/screens/auth/SignIn/SignIn";

import Home from "./src/screens/app/Home";
import Profile from "./src/screens/app/Profile";
import Favorites from "./src/screens/app/Favorites";


import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack=createNativeStackNavigator();

const Tab =createBottomTabNavigator()

import Config from "react-native-config";
import { colors } from "./src/utils/colors";

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={({route}) =>({
      tabBarIcon: ({ focused, color, size}) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
          ? require('./src/assets/tabs/clarity_home-solid.png')
          : require('./src/assets/tabs/clarity_home-grey.png');
        } else if (route.name === 'Favorites') {
          icon = focused
          ? require('./src/assets/tabs/marker-solid.png')
          : require('./src/assets/tabs/marker_grey.png');
        } else if (route.name === 'Profile') {
          icon = focused
          ? require('./src/assets/tabs/group-solid.png')
          :require('./src/assets/tabs/group-grey.png');
        }
        return <Image style={{width:24, height:24}} source={icon} />
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: colors.lightGrey}
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator> 
  )
}

const App = () => {
  const isSignedIn = true

  useEffect(() =>{
    GoogleSignin.configure({
      scopes:['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.WEB_CLIENT_ID,
      offlineAccess:true,
      iosClientId: Config.IOS_CLIENT_ID
    })
  },[])

  const theme = {
    colors: {
      background: colors.white
    },
  };

return (
<SafeAreaProvider>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {
          isSignedIn ? (
            <>
            <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
              <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
              <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
};

export default React.memo(App)