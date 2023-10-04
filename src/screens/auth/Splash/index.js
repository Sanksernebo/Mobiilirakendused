import React from "react";
import {
    Text,
    View,
    Image 
} from "react-native";
import Button from "../../../components/Button"
import Link from "../../../components/Link";
import {styles} from "./styles";

const Splash = ({navigation}) => {
    console.log('navigation', navigation)

    const onSignup =() => {
        navigation.navigate('Signup')
    }
    const onSignIn =() => {
        navigation.navigate('SignIn')
    }
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}/>
            <Text style= {styles.title} >You'll Find </Text>
            <Text style={[styles.title,styles.innerTitle]}>All you need </Text>
            <Text style={styles.title}>Here!</Text>

            <Button onPress={onSignup} title="Sign Up"/>
            <Link onPress={onSignIn} title="Sign in"></Link>
        </View>
    )
}
export default Splash