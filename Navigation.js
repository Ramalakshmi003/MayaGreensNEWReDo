import LoginScreen from "./src/Screens/LoginScreen";
import OtpVerficationScreen from "./src/Screens/OtpVerficationScreen";
import DashboardScreen from "./src/Screens/DashboardScreen";
import IrrigationScreen from "./src/Screens/IrrigationScreen";
import WeatherScreen from "./src/Screens/WeatherScreen";
import FertigationScreen from "./src/Screens/FertigationScreen";
import FarmControlScreen from "./src/Screens/FarmControlScreen";
import ForcastScreen from "./src/Screens/ForcastScreen";
import CropsScreen from "./src/Screens/CropsScreen";
import MargetPlaceScreen from "./src/Screens/MargetPlaceScreen";
import SupportScreen from "./src/Screens/SupportScreen";

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

export default NavigationPage = () => {
    return (
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="otp" component={OtpVerficationScreen} />
            <Stack.Screen name="dashboard" component={DashboardScreen} />
            <Stack.Screen name="irrigation" component={IrrigationScreen} />
            <Stack.Screen name="weather" component={WeatherScreen} />
            <Stack.Screen name="fertigation" component={FertigationScreen} />
            <Stack.Screen name="farmControl" component={FarmControlScreen} />
            <Stack.Screen name="forcast" component={ForcastScreen} />
            <Stack.Screen name="crops" component={CropsScreen} />
            <Stack.Screen name="market" component={MargetPlaceScreen} />
            <Stack.Screen name="support" component={SupportScreen} />
        </Stack.Navigator>
    )
}





// const Drawer = createDrawerNavigator();

// const DrawerNavigation = () => {
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen name="dashboard" component={NavigationContainer} />
//             <Drawer.Screen name="irrigation" component={IrrigationScreen} />
//             <Drawer.Screen name="weather" component={WeatherScreen} />
//             <Drawer.Screen name="fertigation" component={FertigationScreen} />
//             <Drawer.Screen name="farmControl" component={FarmControlScreen} />
//             <Drawer.Screen name="forcast" component={ForcastScreen} />
//             <Drawer.Screen name="crops" component={CropsScreen} />
//             <Drawer.Screen name="market" component={MargetPlaceScreen} />
//             <Drawer.Screen name="support" component={SupportScreen} />
//         </Drawer.Navigator>
//     );
// }

// export default DrawerNavigation
