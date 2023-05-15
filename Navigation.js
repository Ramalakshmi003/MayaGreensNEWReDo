import LoginScreen from "./Screens/LoginScreen";
import OtpVerficationScreen from "./Screens/OtpVerficationScreen";
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack =createNativeStackNavigator();

const NavigationPage=()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component ={LoginScreen}/>
                <Stack.Screen name="otp" component={OtpVerficationScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default NavigationPage