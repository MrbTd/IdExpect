import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './components/Login'
import Inscription from './components/Inscription'
import Debut from './components/Debut'
import Activation from './components/Activation'
import Profil from './components/Profil'
import MainTabScreen from './screen/MainTabScreen'
import StackScreen from './screen/StackScreen'
import ItemEvenement from './screen/ItemEvenement'
import ConfirmConect from './components/ConfirmConect';
import Navigation from './Drawer/ScreenDrawer'
import ModifProfil from './components/ModifProfil'
import RefuseScan from './screen/RefuseScan'




const App = () => {
  
  return (
    <StackScreen/>

  );
};



export default App;
