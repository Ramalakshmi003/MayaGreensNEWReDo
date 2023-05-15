import React from 'react'
import NavigationPage from './Navigation';
import DrawerNavigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from './Screens/LoginScreen';


const App = () => {
    return(
        <NavigationContainer>
            {/* <DrawerNavigation /> */}
            <NavigationPage />
        </NavigationContainer>
    )
}
export default App;