import React from 'react'
import NavigationPage from './src/navigation/Navigation';
import { Provider } from 'react-redux';
// import SupportScreen from './src/Screens/SupportScreen';
import Store from './src/reduxToolkit/store/Store';
// import DashboardScreen from './src/Screens/DashboardScreen';
// import DrawerNavigation from './Navigation';
// import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from './Screens/LoginScreen';


const App = () => {
    return(
        <Provider store = {Store}>
              <NavigationPage />
            {/* <SupportScreen /> */}
        </Provider>
        // <NavigationPage />
        // <DashboardScreen />
    )
}
export default App;