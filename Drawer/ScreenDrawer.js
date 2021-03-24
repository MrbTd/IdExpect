import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from '../screen/MainTabScreen'
import DrawerContent from './DrawerContent'
import Notification from '../screen/Notification'








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