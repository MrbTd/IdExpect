import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from '../screen/MainTabScreen'
import DrawerContent from './DrawerContent'
import Notification from '../screen/Notification'
import Contact from '../screen/Contact'
import Evenement from '../screen/Evenement'
import Home from '../screen/Home'
import Scan from '../screen/Scan'
import Smart from '../screen/Smart'
import Deconnexion from '../components/Deconnexion'
import Login from '../components/Login'







const ScreenDrawer = () => {
    const Drawer = createDrawerNavigator();


    return (
      
        <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>}>
      
          <Drawer.Screen name="MainTabScreen" component={MainTabScreen}/>
          <Drawer.Screen name="Notification" component={Notification}/>
         

     
      </Drawer.Navigator>
     
    );
  }
  export default ScreenDrawer