import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View ,Text,Image,StatusBar, TextInput} from 'react-native';
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

            <View style={{height:hp('19%'),backgroundColor:'#123D40',marginRight:wp('2%'),marginLeft:wp('2%'),marginTop:hp('1%'),borderRadius:10,padding:wp('2%')}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:wp('4%')}}>
                <View style={{flexDirection:'row'}}>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('MainTabScreen')}> 

                    <MaterialCommunityIcons name="arrow-left" color="white" size={23}/>
                </TouchableWithoutFeedback>
                    <Text style={{color:'white',fontSize:18}}>PROFIL</Text>
                </View>
                <View>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Profil')}>
                <Image source={require('../assets/valide.png')} style={{width:wp('11%'), height:hp('5%'),borderRadius:5}} />
                </TouchableWithoutFeedback>
                </View>
                </View>
                <Avatar.Image source={require('../assets/boni.png')} size={65} style={{alignSelf:'center',marginBottom:5}}/>
                <View style={{backgroundColor:'#0E787E',borderRadius:20,width:30,height:30,justifyContent:'center',alignItems:'center',alignSelf:'center',top:hp('-6%'),left:wp('6%')}}>
                    <MaterialCommunityIcons name="camera" size={21} color='white'/>
                </View>
                
            </View>
            <View style={{backgroundColor:'#FFFFFF',marginRight:wp('2%'),marginLeft:wp('2%'),marginTop:hp('3%'),borderRadius:10,padding:wp('2%')}}>
                
                <View style={{borderBottomWidth:1,borderBottomColor:'#80808077'}}>
                    <Text style={{opacity:0.5}}>Nom et Prenoms</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TextInput placeholder="Franck Boni"/>
                        <MaterialCommunityIcons name="pencil" size={20} color="#0E787E"/>
                    </View>
               </View>

               <View style={{borderBottomWidth:1,borderBottomColor:'#80808077'}}>
                    <Text style={{opacity:0.5}}>Adresse</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TextInput placeholder="Koumassi"/>
                        <MaterialCommunityIcons name="pencil" size={20} color="#0E787E"/>
                    </View>
               </View>

               <View style={{borderBottomWidth:1,borderBottomColor:'#80808077'}}>
                    <Text style={{opacity:0.5}}>Ville</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TextInput placeholder="Abidjan"/>
                        <MaterialCommunityIcons name="pencil" size={20} color="#0E787E"/>
                    </View>
               </View>

               <View style={{borderBottomWidth:1,borderBottomColor:'#80808077'}}>
                    <Text style={{opacity:0.5}}>Genre</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TextInput placeholder="Masculin"/>
                        <MaterialCommunityIcons name="pencil" size={20} color="#0E787E"/>
                    </View>
               </View>

               <View style={{borderBottomWidth:1,borderBottomColor:'#80808077'}}>
                    <Text style={{opacity:0.5}}>Email</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TextInput placeholder="ample@gmail.com"/>
                        <MaterialCommunityIcons name="pencil" size={20} color="#0E787E"/>
                    </View>
               </View>

               <View style={{borderBottomColor:'#80808077'}}>
                    <Text style={{opacity:0.5}}>Numero</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TextInput placeholder="52687456"/>
                        <MaterialCommunityIcons name="pencil" size={20} color="#0E787E"/>
                    </View>
               </View>

            </View>

        </View>
    );
}

export default Profil;