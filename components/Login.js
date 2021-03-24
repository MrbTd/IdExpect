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
const [addrCo,setAddrCo]=useState('')
const [paswd,setPaswd]=useState('')
const [error1,setError1]=useState(false)
const [error2,setError2]=useState(false)



const [isMod, setIsMod] = useState(true);
useEffect(()=>{
  setTimeout(() => {
    setIsMod(false)
  }, 1500);
})

useEffect(()=>{
  setTimeout(() => {
    setError1(false)
    setError2(false)
  }, 3000);
})

 

const handleConnexion=()=>{
    if (addrCo==="" || paswd==="")
    {
      setError1(true)
      setPaswd('')
      setAddrCo('')
    }
    else if(addrCo!=="toure" || paswd!=="papamaman")
    {
      setError2(true)
      setPaswd('')
      setAddrCo('')
    }
    else{
      navigation.navigate('ScreenDrawer')
    }
    

}

const handleInscription=()=>{
  navigation.navigate('Inscription')
}





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
                <View style={styles.viewInput}>
                  <Image source={require('../assets/mail.png')} style={styles.inputLogin}/>                       

                   <TextInput 
                      placeholder="E-mail | Nom d'utilisateur" 
                      placeholderTextColor="#FFFFFF7F" 
                      style={{paddingLeft:15,color:'white'}} 
                      onChangeText={val=>setAddrCo(val)}
                      value={addrCo}
                   />
                  
                 </View>

                 <View style={styles.viewInput}>
                 <Image source={require('../assets/cadena.png')} style={styles.inputLogin}/>                       

                    <TextInput 
                        placeholder="Mot de passe" 
                        placeholderTextColor="#FFFFFF7F" 
                        style={{paddingLeft:15,color:'white'}}
                        onChangeText={text=>setPaswd(text)}
                        value={paswd}
                        secureTextEntry={true}
                    />
                   
                 </View>
                <Text style={{color:'red'}}> {error1===true ? <Text >Champ Vide</Text>:<Text></Text>} {error2===true ? <Text>Information Incorrect</Text>:<Text></Text>}</Text>
                 <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                 <View style={{flexDirection:'row'}}>
                 
                      <CheckBox
                          value={isSelected}
                          onValueChange={(newValue) => setSelection(newValue)}
                          tintColors={{ true: 'white', false: '#F1F1F1AF' }}
                          />
                      <Text style={styles.textLogin}>Reste connecte</Text>
                      </View>
                      <Text style={[styles.textLogin,{textDecorationLine: 'underline'}]}>Mot de passe oublie?</Text>

                 </View>
                 
                 <View style={{alignItems:'center'}}>

                    <TouchableOpacity style={styles.btnLogin} onPress={handleConnexion}>
                        <Text style={{textAlign:'center',color:'white'}}>Connexion</Text>
                    </TouchableOpacity>
                  
                  <View style={{flexDirection:'row',marginTop:15}}>
                    <Text style={{color:'white',marginRight:15}}>Aucun compte?</Text>
                    <Text style={{color:'white',textDecorationLine: 'underline'}} onPress={handleInscription} >S'inscrire</Text>

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

    },
    btnLogin:{
      backgroundColor:'#216161', width:'90%', height:40, justifyContent:'center',borderRadius:30,marginTop:40
    },
    textLogin:{
      marginTop: 5,color:'white'
    },
    inputLogin:{
      width:19 ,height:16,marginTop:18
    },
    viewInput:{
      borderBottomWidth:1, borderColor:'white',flexDirection:'row'
    }
  });
export default Login;