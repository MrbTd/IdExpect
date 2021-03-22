import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Evenement from './Evenement'
import ItemEvenement from './ItemEvenement'


const Stack = createStackNavigator();

function StackEvenemet() {
  return (
    <Stack.Navigator screenOptions={{
       headerShown: false
      }}>
    
      <Stack.Screen name="ItemEvenement" component={ItemEvenement} />
      <Stack.Screen name="Evenement" component={Evenement} />

    </Stack.Navigator>
  );
}
export default StackEvenemet