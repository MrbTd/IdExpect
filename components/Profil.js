import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View ,Text,Image,StatusBar} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {profil} from '../global'

function Profil({navigation}) {
    return (
        <View style={{flex:1,backgroundColor:'#1F4F4F'}}>
            <StatusBar
                
                backgroundColor="#1F4F4F"
                
            />

            <View style={{height:158,backgroundColor:'#123D40',marginRight:wp('2%'),marginLeft:wp('2%'),marginTop:10,borderRadius:10,padding:10}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:39}}>
                <View style={{flexDirection:'row'}}>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('MainTabScreen')}> 

                    <MaterialCommunityIcons name="arrow-left" color="white" size={23}/>
                </TouchableWithoutFeedback>
                    <Text style={{color:'white',fontSize:18}}>PROFIL</Text>
                </View>
                <View>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('ModifProfil')}> 
                <Image source={require('../assets/modif.png')} style={{width:44, height:31,borderRadius:5}} />
                </TouchableWithoutFeedback>
                </View>
                </View>
                <Avatar.Image source={require('../assets/boni.png')} size={60} style={{alignSelf:'center',}}/>
                
            </View>
            <View style={{backgroundColor:'#FFFFFF',marginRight:wp('2%'),marginLeft:wp('2%'),marginTop:hp('4%'),borderRadius:10,padding:10,marginBottom:wp('2%'),}}>
            <View style={{borderBottomWidth:1,borderBottomColor:'#80808077',paddingTop:hp('1%')}}>
                    <Text style={{opacity:0.5,paddingBottom:hp('1%')}}>Nom et Prenoms</Text>
                    <Text>{profil[0].nomPrenom}</Text>
               </View>

               <View style={{borderBottomWidth:1,borderBottomColor:'#80808077',paddingBottom:hp('1%'),paddingTop:10}}>
                    <Text style={{opacity:0.5,paddingBottom:8}}>Adresse</Text>
                    <Text>{profil[0].add}</Text>
               </View>

               <View style={{borderBottomWidth:1,borderBottomColor:'#80808077',paddingBottom:hp('1%'),paddingTop:10}}>
                    <Text style={{opacity:0.5,paddingBottom:8}}>Ville</Text>
                    <Text>{profil[0].ville}</Text>
               </View>

               <View style={{borderBottomWidth:1,borderBottomColor:'#80808077',paddingBottom:hp('1%'),paddingTop:10}}>
                    <Text style={{opacity:0.5,paddingBottom:8}}>Genre</Text>
                    <Text>{profil[0].genre}</Text>
               </View>

               <View style={{borderBottomWidth:1,borderBottomColor:'#80808077',paddingBottom:hp('1%'),paddingTop:10}}>
                    <Text style={{opacity:0.5,paddingBottom:8}}>Email</Text>
                    <Text>{profil[0].email}</Text>
               </View>

               <View style={{borderBottomColor:'#80808077',paddingBottom:hp('1%'),paddingTop:10}}>
                    <Text style={{opacity:0.5,paddingBottom:8}}>Numero</Text>
                    <Text>{profil[0].num}</Text>
               </View>

            </View>

        </View>
    );
}

export default Profil;