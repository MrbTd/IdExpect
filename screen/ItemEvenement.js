import React,{useState} from 'react';
import { View ,Image, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


function ItemEvenement({route,navigation}) {
    const [part,setPart]=useState(true)

    
    return (
        <View style={styles.containerContact}>
            <StatusBar
                
                backgroundColor="#1F4F4F"
                
            />

            <View style={[styles.centerBtn,{flexDirection:'row',justifyContent:'space-between'}]}>
                <Image source={require('../assets/logoId.png')} style={{width:wp('10%'),height:hp('5%')}}/>
                <MaterialCommunityIcons name="menu" color="white" size={30}/>
            </View>

            <View style={[styles.centerBtn,{alignItems:'center',marginBottom:hp('8%')}]}>
                <Text style={{color:'white'}}>EVENEMENT</Text>
            </View>
            <View style={styles.containerCard}>
                <View style={{margin:wp('7%'),backgroundColor:'#A6DBDB',borderRadius:15,height:hp('60%')}}>
                    <View style={{margin:wp('4%')}}>
                        <Image source={{uri:route.params.im}} style={{height:hp('22%'),borderTopRightRadius:hp('1%'),borderTopLeftRadius:wp('1%')}} resizeMode="cover"/>
                        
                       
                        <View style={{backgroundColor:'#1F4F4F',padding:hp('1%')}}>

                            <TouchableOpacity style={{backgroundColor:'#08AAAA',width:wp('45%'),borderRadius:10,top:hp('-2%'),left:wp('25%')}} onPress={()=>setPart(!part)}>
                                <Text style={{textAlign:'center',color:'#fffff1',}}>{!part? 'Je participe plus':'Participer'}</Text>
                            </TouchableOpacity>

                            <Text style={{color:'white',opacity:0.8}}>TechkMonday N°{route.params.id}</Text>
                            <Text style={{color:'white',opacity:0.8}}>
                                <Text style={{color:'#155F9F'}}>#TechkMonday</Text> @ AKIL avec Omar Fall qui nous fait une presentation sur 
                                <Text style={{color:'#155F9F'}}>#ReactNative #Expo</Text> et le developpement                            
                            </Text>
                                <View style={{flexDirection:'row',marginTop:10}}>
                                    <Image source={require('../assets/calendar.png')} style={{width:25, height:30, }} />
                                    <Text style={{color:'white',opacity:0.8,paddingLeft:5}}>Lundi,13 janvier 2020{'\n'}17h24 GMT</Text>
                                </View>
                                <View style={{flexDirection:'row',marginTop:10,marginBottom:20}}>
                                    <SimpleLineIcons name="location-pin" size={26} color="orange"/>
                                    <Text style={{color:'white',opacity:0.8,paddingLeft:5}}>Cocody 2 Pltx,8eme tranche{'\n'}Cité Wzdouwel,Abidjan</Text>
                                </View>

                        </View>
                    </View>

                </View>
                

            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    containerContact:{
        backgroundColor:'#215D5D',flex:1
    },
    centerBtn:{
        marginLeft:20,marginRight:20,
        marginTop:10,
    },
    containerCard:{
        flex:1,
        backgroundColor:'#1F4F4F',marginBottom:35

    }
})

export default ItemEvenement;