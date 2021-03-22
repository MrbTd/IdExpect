import React, {useEffect,useState} from "react";
import axios from 'axios'
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { StyleSheet,Image, Text, TextInput,StatusBar, View, TouchableOpacity, Modal,ImageBackground} from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import ConfirmConect from './ConfirmConect'


 export default function Inscription ({navigation}) {
  const url ="https://restcountries.eu/rest/v2/all"
  let [pays,setPays]=useState([])
  const [indi,setIndi]=useState('')
  const [numero,setNumero]=useState('')

  const image1 = require('../assets/fontIme.png')
  const image2 = require('../assets/fontBleu.png')
  const image3 = require('../assets/fontrace2.png')

  useEffect(() => {
    axios.get(url)
    .then(response=>setPays(response.data))
  }, [])

    return (
      <View style={[styles.containerConect]}>
         <StatusBar
       barStyle="light-content"
       backgroundColor="#1F4F4F"
       showHideTransition="slide"
       />
        <ImageBackground source={image1} style={styles.image}>
        <ImageBackground source={image2} style={styles.image}>
        <ImageBackground source={image3} style={styles.image} >
       
     
       
        
        <View style={styles.centerContainer}>
          

        <View style={{alignItems:'center',marginTop:"20%"}}>

        <Image source={require('../assets/logoId.png')} style={{width:51 ,height:45, marginBottom:15}}/>                       
        <Text style={{color:'#FFFFFF',fontFamily:'Segoe UI',fontSize:30,marginBottom:15}}>Inscription</Text> 

        </View>

        <View style={{borderBottomWidth:1, borderColor:'white',flexDirection:'row'}}>
                  <Image source={require('../assets/mail.png')} style={{width:19 ,height:16,marginTop:18}}/>                       

                   <TextInput placeholder="E-mail | Nom d'utilisateur" placeholderTextColor="#FFFFFF7F" style={{paddingLeft:15}}/>
                 </View>

              <Text style={{color:'white',opacity:0.7,position:'relative', top:30}}>Selectionner votre pays</Text>
          
              <Fontisto name="map" size={23}  color="white" style={{position:'relative', top:38}}/> 

                  <RNPickerSelect
                  
                    useNativeAndroidPickerStyle={false} 

                    onValueChange={val=>setIndi(val)}

                    placeholder={{label:'Côte d\'Ivoire',value:'225',key:225}}

                    style={{
                      inputAndroid:{
                        color:'white',
                        paddingLeft:35
                      },placeholder:{
                        color:'white'
                      }
                    }}

                      items={pays.map(obj => (
                        {
                          key:obj.name ,
                          label: obj.name,
                          value: obj.callingCodes[0],
                          
                        }             
                        )) 
                      }

                        Icon={() => {
                          return (
                            <Ionicons name="chevron-down" size={25} color='white' style={{marginTop:10}} />
                          
                            )
                            }
                          }                                        
                  />
          </View>

          <View style={[styles.centerContainer,{marginTop:10, flexDirection:'row'}]}>
              <MaterialIcons name="vibration" size={23} color="white" style={{marginTop:12}}/>

              <TextInput 
              placeholder="Numero de telephone"  
              placeholderTextColor="#FFFFFF7F" 
              keyboardType="phone-pad"
              autoCompleteType="tel"
              style={{color: 'white',paddingLeft:15}}
              defaultValue={indi}
              onChangeText={text=>setNumero(text)}
              />
              
          </View>
          
          <View style={[styles.centerContainer,{marginTop:10, flexDirection:'row'}]}>
              <FontAwesome name="user-o" size={20} color="white" style={{marginTop:12}}/>

              <TextInput 
              placeholder="Numero d'inscription"  
              placeholderTextColor="#FFFFFF7F" 
              keyboardType="numeric"
              style={{color: 'white',paddingLeft:15}}

              />
              
          </View>

          <TouchableOpacity style={{backgroundColor:'#216161', marginLeft:60,marginRight:60, height:40, justifyContent:'center',borderRadius:30,marginTop:40,marginBottom:'30%'}} onPress={()=>navigation.navigate('ConfirmConect',{num:numero})}>
                        <Text style={{textAlign:'center',color:'white'}}>Connexion</Text>
          </TouchableOpacity>
            </ImageBackground>
            </ImageBackground>
            </ImageBackground>
      </View>
    );
  }
  const styles = StyleSheet.create({
    containerConect: {
      flex: 1,
      justifyContent:'center',

     
    },
    centerContainer:{
     marginLeft:60,marginRight:60,borderBottomWidth:1,borderColor:'white',marginTop:'45%'
    },
  image: {
  flex: 1,  
  justifyContent:'center',
  

}
   
  });
  

  