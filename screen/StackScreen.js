import React from 'react'
import {Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login'
import Inscription from '../components/Inscription'
import Activation from '../components/Activation'
import ConfirmConect from '../components/ConfirmConect'
import MainTabScreen from './MainTabScreen';
import Profil from '../components/Profil';
import ModifProfil from '../components/ModifProfil';
import Deconnexion from '../components/Deconnexion';
import Home from './Home';
import Notification from './Notification';
import Evenement from './Evenement'
import ItemEvenement from './ItemEvenement'
import ScreenDrawer from '../Drawer/ScreenDrawer';


const Stack = createStackNavigator();

function StackScreen() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
       headerShown: false
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Inscription" component={Inscription} />
      <Stack.Screen name="Activation" component={Activation} />
      <Stack.Screen name="ConfirmConect" component={ConfirmConect} />
      <Stack.Screen name="MainTabScreen" component={MainTabScreen} />
      <Stack.Screen name="Profil" component={Profil} />
      <Stack.Screen name="ModifProfil" component={ModifProfil} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="ScreenDrawer" component={ScreenDrawer} />
      <Stack.Screen name="ItemEvenement" component={ItemEvenement} />
      <Stack.Screen name="Deconnexion" component={Deconnexion} />







    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackScreen