import React, {useEffect,useState} from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity,StatusBar,ImageBackground, Dimensions, Image} from "react-native";
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Octicons from 'react-native-vector-icons/Octicons'


 export default function Deconnexion () {
    const navigation=useNavigation()

    return (
      <View style={[styles.containerActiv]}>
        <StatusBar
       barStyle="light-content"
       backgroundColor="#1F4F4F7F"
       
       showHideTransition="slide"
       />
      
        
        <View style={styles.modal}>
            <View style={{alignItems:'center'}}>
            <View style={{borderWidth:1,borderRadius:60,borderColor:'#0E787E',padding:10,marginTop:15}}>
            <View style={{borderWidth:6,borderRadius:60,borderColor:'#0E787E'}}>
            <Avatar.Image source={require('../assets/boni.png')} size={80} />

            </View>

            </View>
            
            <View style={{flexDirection:'row',borderBottomWidth:1,width:250,borderBottomColor:'gray'}}>
            <Octicons name="mail-read" size={26} style={{marginLeft:15}}/>
            <Text style={{marginLeft:15}}>Mail{'\n'}lorem@gmail.com</Text>
            </View>
            </View>
            <TouchableOpacity style={{backgroundColor:'#0E787E',height:40,justifyContent:'center',marginTop:30,borderRadius:20,marginRight:10,marginLeft:10,marginBottom:10}} onPress={()=>navigation.navigate('Login')}>
                  <Text style={{textAlign:'center',color:'white'}}>Se deconnecter</Text>             
          </TouchableOpacity>
        </View>

        
      </View>
    );
  }
  const styles = StyleSheet.create({
    containerActiv: {
      flex: 1,
      
      backgroundColor:'rgba(255,255,255,0.5)',
      
      


     
    },
    modal:{
        height:350,
        marginTop:'25%',
        backgroundColor: 'white',
        borderRadius:20,
        marginLeft:'15%',
        marginRight:"15%"
       
    },
    image: {
       flex: 1,  
       justifyContent:'center',
        }
        
  
   
  });
  

  