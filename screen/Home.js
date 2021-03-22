import React, { useState } from 'react';
import { Image ,View,StatusBar, Text, StyleSheet, Modal, Button, TouchableWithoutFeedback} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Avatar } from 'react-native-paper';
import { profil } from '../global';
import Deconnexion from '../components/Deconnexion'

function Home({navigation}) {
    const [isVisible,setIsVisible]=useState(false)
    return (
        <View style={{backgroundColor:'#1F4F4F',flex:1}}>
             <StatusBar
       barStyle="light-content"
       backgroundColor="#1F4F4F"
       showHideTransition="slide"
       />
      
      <Modal transparent={true} blurRadius={1} visible={isVisible}>
          <Deconnexion/>
      </Modal>
        <View style={styles.homeContainer}>

                <View style={styles.btnHome}>
                    <Image source={require('../assets/logoId.png')} style={{width:35, height:35}} />
                    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Notification')}>
                    <Image source={require('../assets/sone.png')} style={{width:25, height:30, }} />
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.avataHome}>
                    <Text style={{color:'white',textTransform:'uppercase',marginTop:10}}>Bienvenue {profil[0].nomPrenom} {'\n'}FullStack</Text>
                    <View>
                    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Profil')}> 
                    <Avatar.Image source={require('../assets/boni.png')} size={60} style={{marginLeft:5}}/>
            
                    </TouchableWithoutFeedback>

                    <View style={{paddingRight:10}}>
                    <TouchableWithoutFeedback onPress={()=>setIsVisible(true)}>
                    <Text style={{color:'white',textAlign:'center'}} >déconnexion</Text>
                    </TouchableWithoutFeedback>
                    </View>
                    </View>
                   
                </View>

                <View style={styles.containerCardHome}>
                        <View style={[styles.cardHome,{marginBottom:20}]}>
                            
                            <View style={styles.cardViewImage} >
                                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Smart')}>    
                                <Image source={require('../assets/parametre.png')} style={styles.cardImage} />
                                </TouchableWithoutFeedback>  
                            </View>

                            <View style={styles.cardViewImage}>      
                                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Scan')}>
                                <Image source={require('../assets/scan.png')} style={styles.cardImage} />
                                </TouchableWithoutFeedback>
                            </View>

                        </View>


                        <View style={styles.cardHome}>
                            
                            <View style={styles.cardViewImage}>
                                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Evenement')}>     
                                <Image source={require('../assets/calendar.png')} style={styles.cardImage} />
                                </TouchableWithoutFeedback> 
                            </View>

                            <View style={styles.cardViewImage}> 
                                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Contact')}>    
                                <Image source={require('../assets/call.png')} style={styles.cardImage} />
                                </TouchableWithoutFeedback> 
                            </View>

                        </View>

                </View>
        </View>

    </View>
    );
}
const styles=StyleSheet.create({
        homeContainer:{
            marginLeft:15,
            marginRight:15,
            
        },
        btnHome:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:hp('5%'),
            marginBottom:10,
            marginLeft:wp('5%'),
            marginRight:wp('5%')
        },
        avataHome:{
            backgroundColor:'#127171',
            justifyContent:'center',
            paddingTop:16,
            paddingBottom:20,
            paddingLeft:15,
            borderRadius:20, 
            height:100,
            flexDirection:'row',
            justifyContent:'space-between',
            paddingRight:10
        },
        containerCardHome:{
            backgroundColor:'#127171',
            marginTop:10,
            justifyContent:'center',
            alignItems:'center',
            paddingTop:hp('5%'),
            paddingBottom:hp('5%'),
            borderRadius:20,
            marginBottom:hp('1%')
            
            
            
        },
        cardHome:{
            flexDirection:'row',
            justifyContent:'space-around',
            
            
        },
        cardViewImage:{
            borderWidth:1,
            borderColor:'white',
            padding:20,
            borderRadius:10,
            backgroundColor:'#087076',
            margin:10
        },
        cardImage:{
            width:66, 
            height:60
        }

})

export default Home;