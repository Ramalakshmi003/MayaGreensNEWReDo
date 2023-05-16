import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "../LoginScreen";
import OtpVerficationScreen from "../OtpVerficationScreen";
import DashboardScreen from "../DashboardScreen";
import IrrigationScreen from "../IrrigationScreen";
import WeatherScreen from "../WeatherScreen";
import FertigationScreen from "../FertigationScreen";
import FarmControlScreen from "../FarmControlScreen";
import ForcastScreen from "../ForcastScreen";
import CropsScreen from "../CropsScreen";
import MargetPlaceScreen from "../MargetPlaceScreen";
import SupportScreen from "../SupportScreen";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function NavigationPage() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="otp" component={OtpVerficationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="dashboard" component={DrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  function DrawerNavigator() {
    return (
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="dashboard" component={DashboardScreen} />
        <Drawer.Screen name="irrigation" component={IrrigationScreen} />
        <Drawer.Screen name="weather" component={WeatherScreen} />
        <Drawer.Screen name="fertigation" component={FertigationScreen} />
        <Drawer.Screen name="farmControl" component={FarmControlScreen} />
        <Drawer.Screen name="forcast" component={ForcastScreen} />
        <Drawer.Screen name="crops" component={CropsScreen} />
        <Drawer.Screen name="market" component={MargetPlaceScreen} />
        <Drawer.Screen name="support" component={SupportScreen} />
      </Drawer.Navigator>
    );
  }
  
  export default NavigationPage;

// function AuthStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="otp" component={OtpVerficationScreen} />
//         </Stack.Navigator>
//     );
// }

// function ContentStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="irrigation" component={IrrigationScreen} />
//             <Stack.Screen name="weather" component={WeatherScreen} />
//             <Stack.Screen name="fertigation" component={FertigationScreen} />
//             <Stack.Screen name="farmControl" component={FarmControlScreen} />
//             <Stack.Screen name="forcast" component={ForcastScreen} />
//             <Stack.Screen name="crops" component={CropsScreen} />
//             <Stack.Screen name="market" component={MargetPlaceScreen} />
//             <Stack.Screen name="support" component={SupportScreen} />
//             {/* <Stack.Screen name="ContentPage1" component={ContentPage1} />
//             <Stack.Screen name="ContentPage2" component={ContentPage2} /> */}
//         </Stack.Navigator>
//     );
// }

// function DrawerNavigator() {
//     return (
//       <Drawer.Navigator>
//         <Drawer.Screen name="dashboard" component={DashboardScreen} />
//         <Drawer.Screen name="ContentStack" component={ContentStack} />
//       </Drawer.Navigator>
//     );
//   }


  
// function NavigationPage() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator headerMode="none">
//           <Stack.Screen name="Auth" component={AuthStack} />
//           <Stack.Screen name="Drawer" component={DrawerNavigator} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }

//   export default NavigationPage;




// import * as React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Stack = createNativeStackNavigator();

// export default NavigationPage = () => {
//     return (
//         <Stack.Navigator screenOptions={{ header: () => null }}>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="otp" component={OtpVerficationScreen} />
//             <Stack.Screen name="dashboard" component={DashboardScreen} />
//             <Stack.Screen name="irrigation" component={IrrigationScreen} />
//             <Stack.Screen name="weather" component={WeatherScreen} />
//             <Stack.Screen name="fertigation" component={FertigationScreen} />
//             <Stack.Screen name="farmControl" component={FarmControlScreen} />
//             <Stack.Screen name="forcast" component={ForcastScreen} />
//             <Stack.Screen name="crops" component={CropsScreen} />
//             <Stack.Screen name="market" component={MargetPlaceScreen} />
//             <Stack.Screen name="support" component={SupportScreen} />
//         </Stack.Navigator>
//     )
// }





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
