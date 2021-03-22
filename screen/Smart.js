import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View ,Image, Text, StyleSheet, StatusBar,ImageBackground} from 'react-native';
import { Avatar } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Contact=()=>{ 
     return (
        <View style={styles.containerContact}>
           
             <StatusBar
                backgroundColor="#1F4F4F"
            />
            <View style={[styles.centerBtn,{flexDirection:'row',justifyContent:'space-between'}]}>
                <Image source={require('../assets/logoId.png')} style={{width:25,height:35}}/>
                <MaterialCommunityIcons name="menu" color="white" size={30}/>
            </View>

            <View style={[styles.centerBtn,{alignItems:'center',marginBottom:10}]}>
            <View style={{borderWidth:1,borderRadius:70,borderColor:'#0E787E',padding:10}}>
            <View style={{borderWidth:6,borderRadius:70,borderColor:'#0E787E'}}>
            <Avatar.Image source={require('../assets/boni.png')} size={110} />

            </View>

            </View>
                <Text style={{color:'white',paddingTop:15}}>FRANCK BONI</Text>
                <Text style={{color:'white',opacity:0.6,paddingBottom:15}}>Nom du cabinet</Text>

            </View>
            <View style={styles.containerCard}>
                
                <View style={{alignItems:'center',justifyContent:'center',marginTop:'10%',marginBottom:'5%'}}>
                    <Image source={require('../assets/qr.png')} style={{width:wp('60%'),height:hp('32%')}} />
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
        marginLeft:wp('10%'),marginRight:wp('10%'),
        marginTop:hp('1,5%')
    },
    containerCard:{
        flex:1,
        backgroundColor:'#1F4F4F',marginTop:hp('-2%')

    },
    cardView1:{
        backgroundColor:'#1F4F4F',
        padding:6,
        color:'white' ,
        marginBottom:0.5,
    },
    cardView2:{backgroundColor:'#1F4F4F',padding:10,color:'white' }

})

export default Contact;
    