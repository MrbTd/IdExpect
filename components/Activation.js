import React, {useEffect,useState} from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity,StatusBar,ImageBackground, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 export default function Activation ({navigation}) {
    const [count, setCount] = useState(60);
    const [decomptVerif, setDecomptVerif] = useState(false);

    const image1 = require('../assets/fontH.png')
    const image2 = require('../assets/fontBleu.png')

    useEffect(() => {
    const stop=setTimeout(() => {
           setCount(count-1);
         }, 1000);
         if(count===0){
            setDecomptVerif(true)
         }
       },);

    return (
      <View style={[styles.containerActiv]}>
        <StatusBar
       barStyle="light-content"
       backgroundColor="#1F4F4F"
       showHideTransition="slide"
       />
      
        <ImageBackground source={image1} style={styles.image}>
        <ImageBackground source={image2} style={styles.image}>

        <View style={styles.modal}>
          <Text style={{textAlign:'center',color:'#1F4F4F',marginTop:15,fontSize:24}}>Activez votre compte</Text>
          <Text style={{textAlign:'center',color:'black',marginTop:15,fontSize:17}}>Vos codes on été envoyés avec succes.</Text>
          <Text style={{textAlign:'center',color:'black',marginTop:15,fontSize:18}}>Vous allez recevoir deux codes {'\n'}
          d'autentification. Le premier par.{'\n'}
          SMS et le second sur ce email.{"\n"}
          Pour les saisir, vous avez des{'\n'} maintenant
          </Text>
          <Text style={{textAlign:'center',color:'#1F4F4F',marginTop:10}}>{decomptVerif ? '00:00':`00:${count}`}</Text>
          <TextInput placeholder="66541223X" placeholderTextColor="#1F4F4F" style={{borderBottomWidth:1,marginRight:10,marginLeft:10,textAlign:'center'}}/>
          <TextInput placeholder="66541223X" placeholderTextColor="#1F4F4F" style={{borderBottomWidth:1,marginRight:10,marginLeft:10,textAlign:'center'}}/>

          <TouchableOpacity style={{marginLeft:wp('3%'),backgroundColor:'#0E787E',width:wp('78%'),height:hp('8%'),justifyContent:'center',marginTop:30,borderRadius:30}} onPress={()=>navigation.navigate('Activation')}>
                        <Text style={{textAlign:'center',color:'white',fontSize:18}}>Renvoyez</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft:wp('3%'),backgroundColor:'#0E787E',width:wp('78%'),height:hp('8%'),justifyContent:'center',marginTop:20,borderRadius:30,marginBottom:hp('5%')}} onPress={()=>navigation.navigate('ScreenDrawer')}>
                        <Text style={{textAlign:'center',color:'white',fontSize:18}}>Continuez</Text>
          </TouchableOpacity>

        </View>

        </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
  const styles = StyleSheet.create({
    containerActiv: {
      flex: 1,
      justifyContent:'center',

     
    },
    modal:{
        height:550,
        paddingTop:20,
        backgroundColor: 'rgba(252,252,252, 0.6)',
        borderRadius:20,
        marginLeft:wp('8%'),
        marginRight:wp('8%')
       
    },
    image: {
       flex: 1,  
       justifyContent:'center',
        }
        
  
   
  });
  

  