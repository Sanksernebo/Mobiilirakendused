import React, {useEffect} from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import AuthHeader from "./src/components/AuthHeader";
import Signup from "./src/screens/auth/SignUp/Signup";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";

GoogleSignin.configure({
  webClientId: '651630562809-vbgjlqqq7ihiml4fua3fp34c6v42pv60.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  iosClientId: '651630562809-3h8mhdmsio6uqajf6hmot0e66llllmot.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});


const REVERSED_CLIENT_ID='com.googleusercontent.apps.651630562809-3h8mhdmsio6uqajf6hmot0e66llllmot'


const App = () => {
  useEffect(() =>{
    GoogleSignin.configure({
      scopes:['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: Config.WEB_CLIENT_ID,
      offlineAccess:true,
      iosClientId: Config.IOS_CLIENT_ID
    })
  },[])
return (
  <SafeAreaView>
    <Signup/>
  </SafeAreaView>
);
};

export default React.memo(App)