import React ,{useState,useEffect}from 'react';
import {View, Text, StatusBar, StyleSheet,ImageBackground,TextInput, TouchableOpacity, Image, Modal} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Debut from './Debut'
import Inscription from './Inscription'

function Login({navigation}) {
const image1 = require('../assets/fontIme.png')
const image2 = require('../assets/fontBleu.png')
const image3 = require('../assets/fontrace.png')
const [isSelected, setSelection] = useState(false);
const [modInscri, setModInscri] = useState(false);

const [isMod, setIsMod] = useState(true);
useEffect(()=>{
  setTimeout(() => {
    setIsMod(false)
  }, 1500);
})


    return (
       <View style={styles.container}>

        <StatusBar
       barStyle="light-content"
       backgroundColor="#1F4F4F"
       showHideTransition="slide"
       />
       <Modal visible={isMod} >
          <Debut/>
       </Modal>

      
        <ImageBackground source={image1} style={styles.image}>
        <ImageBackground source={image2} style={styles.image}>
        <ImageBackground source={image3} style={styles.image} >

              <View style={styles.containerLogin}>

                     <View style={{alignItems:'center'}}>

                        <Image source={require('../assets/logoId.png')} style={{width:51 ,height:45, marginBottom:15}}/>                       
                        <Text style={{color:'#FFFFFF',fontFamily:'Segoe UI',fontSize:30,marginBottom:20}} >Connexion</Text> 

                    </View>
                <View style={{borderBottomWidth:1, borderColor:'white',flexDirection:'row'}}>
                  <Image source={require('../assets/mail.png')} style={{width:19 ,height:16,marginTop:18}}/>                       

                   <TextInput placeholder="E-mail | Nom d'utilisateur" placeholderTextColor="#FFFFFF7F" style={{paddingLeft:15}}/>
                 </View>

                 <View style={{borderBottomWidth:1, borderColor:'white',flexDirection:'row'}}>
                 <Image source={require('../assets/cadena.png')} style={{width:19 ,height:16,marginTop:18}}/>                       

                    <TextInput placeholder="Mot de passe" placeholderTextColor="#FFFFFF7F" style={{paddingLeft:15}}/>
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                 <View style={{flexDirection:'row'}}>
                 
                      <CheckBox
                          value={isSelected}
                          onValueChange={(newValue) => setSelection(newValue)}
                          tintColors={{ true: 'white', false: '#F1F1F1AF' }}
                          />
                      <Text style={{marginTop: 5,color:'white'}}>Reste connecte</Text>
                      </View>
                      <Text style={{marginTop: 5,color:'white',textDecorationLine: 'underline'}}>Mot de passe oublie?</Text>

                 </View>
                 
                 <View style={{alignItems:'center'}}>

                    <TouchableOpacity style={{backgroundColor:'#216161', width:'90%', height:40, justifyContent:'center',borderRadius:30,marginTop:40}} onPress={()=>navigation.navigate('ScreenDrawer')}>
                        <Text style={{textAlign:'center',color:'white'}}>Connexion</Text>
                    </TouchableOpacity>
                  
                  <View style={{flexDirection:'row',marginTop:15}}>
                    <Text style={{color:'white',marginRight:15}}>Aucun compte?</Text>
                    <Text style={{color:'white',textDecorationLine: 'underline'}} onPress={()=>navigation.navigate('Inscription')} >S'inscrire</Text>

                  </View>
                 
                 </View>

              </View>

            </ImageBackground>
            </ImageBackground>
            </ImageBackground>
                        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    containerLogin: {
      marginLeft:wp('6%'),
      marginRight:wp('6%'),
      marginTop:hp('5%')
    },
    image: {
      flex: 1,  
      justifyContent:'center',
      
    
    }
  });
export default Login;