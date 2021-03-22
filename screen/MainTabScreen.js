/**
*/
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {Image, View} from 'react-native';
import Smart from './Smart'
import Scan from './Scan'
import Evenement from './Evenement'
import StackEvenemet from './StackEvenemet'

import Contact from './Contact'
import Home from './Home'
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainTabScreen=()=>{
    const Tab = createBottomTabNavigator();

    return(
    
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        style:{ 
          borderTopLeftRadius:21, 
          borderTopRightRadius:21,
          backgroundColor:"white",
          position:'absolute',
          bottom: 0,
         paddingBottom:10,
          height: 54,
          paddingTop:7
          
         
        }
      }}
    >
      <Tab.Screen
        name="Smart"
        component={Smart}
        options={{
          tabBarLabel: 'Smart',
          tabBarColor:"#d02860",
          tabBarIcon: ({ color }) => (
            <Image style={{width:26,height:26}}  
            source={require('../assets/parametre.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color }) => (
            <Image style={{width:26,height:26}}  
            source={require('../assets/scan.png')}
            />
          ),
        }}
      />


      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View 
            style={{
              backgroundColor:'#1F4F4F',
              width:70,
              height:70, 
              borderRadius:80,
              position:'relative',
              top:-10,
              alignItems:'center',
              marginTop:'5%'

            }}>
              <TouchableOpacity 
              style={{
                borderRadius:90,
                backgroundColor:'#127171',
                width:50,
                height:50,
                justifyContent:'center',
                position:'relative',
                top:5,
              }}>
                <MaterialCommunityIcons name="home" size={26} color='white' 
                style={{textAlign:'center'}}/>
                </TouchableOpacity>
                </View>

          ),
        }}
      />

      <Tab.Screen
        name="Evenement"
        component={Evenement}
        options={{
          
          tabBarLabel: 'Evenement',
          tabBarIcon: ({ color }) => (
            <Image style={{width:26,height:26}}  
            source={require('../assets/calendar.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{

          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => (
            <Image style={{width:26,height:26}}  
            source={require('../assets/call.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>

    )
}


export default MainTabScreen