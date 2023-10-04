import React, {useEffect} from "react";
import { SafeAreaView } from "react-native";
import Splash from "./src/screens/auth/Splash";
import AuthHeader from "./src/components/AuthHeader";
import Signup from "./src/screens/auth/SignUp/Signup";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import SignIn from "./src/screens/auth/SignIn/SignIn";



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
    <SignIn/>
  </SafeAreaView>
);
};

export default React.memo(App)