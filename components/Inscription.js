import React, {useEffect,useState} from "react";
import axios from 'axios'
import { StyleSheet,Image, Text, TextInput,StatusBar, View, TouchableOpacity, ScrollView,ImageBackground} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { List } from 'react-native-paper';

 export default function Inscription ({navigation}) {
  const url ="https://restcountries.eu/rest/v2/all"
  let [pays,setPays]=useState([])
  const [numero,setNumero]=useState('')
  const [selected, setSelected] = useState('choix de pays')
  const [expanded, setExpanded] = React.useState(false);
  const [numIns,setNumIns]=useState('')
  
  
  
  

  const image1 = require('../assets/fontIme.png')
  const image2 = require('../assets/fontBleu.png')
  const image3 = require('../assets/fontrace2.png')

  
  
  const handlePress = () => setExpanded(!expanded);

  const handleListe = (val) => {
      
      setSelected(val.name)
       setExpanded(!expanded)
       setNumero(val.callingCodes[0])
      
  }


  useEffect(() => {
    axios.get(url)
    .then(response=>setPays(response.data))
  }, [])

  const numeroInscription="azerty"
  let text=""
  let success=""
  let diseable=true
  let coul='gray'

  let nb=0
  nb=numIns.length

  if(numeroInscription===numIns){
    success="#1AA71E"
    text=""
    diseable=false
    coul='#216161'

 }
  else if(numeroInscription!==numIns && nb>4 ){
    success="red"
    text="Ce numero d'inscription n'est pas reconnu"

  }
  else{
    success="white"
    text=""
  }
      


    return (
      <View style={[styles.containerConect]}>
        
         <StatusBar
       barStyle="light-content"
       backgroundColor="#1F4F4F"
       />
        <ImageBackground source={image1} style={styles.image}>
        <ImageBackground source={image2} style={styles.image}>
        <ImageBackground source={image3} style={styles.image} >
       
       
        <ScrollView>
        <View style={styles.centerContainer}>
          

            <View style={{alignItems:'center',marginTop:"20%"}}>

            <Image source={require('../assets/logoId.png')} style={{width:51 ,height:45, marginBottom:15}}/>                       
            <Text style={{color:'#FFFFFF',fontSize:30,marginBottom:15}}>Inscription</Text> 

            </View>
            
            <View style={{borderBottomWidth:1, borderColor:'white',flexDirection:'row'}}>
                      <Image source={require('../assets/mail.png')} style={{width:19 ,height:16,marginTop:18}}/>                       

                      <TextInput 
                      placeholder="E-mail | Nom d'utilisateur" 
                      placeholderTextColor="#FFFFFF7F" 
                      style={styles.inputInscrip}
                      />
            </View>

            <View>


           <List.Section >
                  <List.Accordion
                    title={selected}

                    left={props => <List.Icon {...props} icon="map"  color="#FFFFFF7F" style={{left:wp('-6%')}}/>}
                    expanded={expanded}
                    onPress={handlePress}
                    titleStyle={{color:'#FFFFFF9C',left:wp('-9%')}}
                    style={{borderBottomWidth:1,borderColor:'white',}}
                    
                    
                  >
                     <ScrollView >

                   {
                     pays.map(val=>(
                      
                         <TouchableOpacity onPress={()=>handleListe(val)} key={val.alpha2Code} style={styles.btnMap}>
                          <Text key={val.alpha2Code} style={{color:'#FFFFFF9C'}}>{val.name}</Text> 
                         </TouchableOpacity>
                      
                     ))
                   }
                    </ScrollView>
                    
                  </List.Accordion>
                </List.Section>
           </View>


        </View>

          <View style={[styles.centerContainer,styles.centerView]}>
              <MaterialIcons name="vibration" size={23} color="white" style={{marginTop:12}}/>

              <TextInput 
              placeholder="Numero de telephone"  
              placeholderTextColor="#FFFFFF9C" 
              keyboardType="numeric"
              autoCompleteType="tel"
              style={styles.inputInscrip}              
              defaultValue={numero}
              onChangeText={text=>setNumero(text)}
              />
              
          </View>
          
          <View style={[styles.centerContainer,styles.centerView]}>
              <FontAwesome name="user-o" size={20} color="white" style={{marginTop:12}}/>

              <TextInput 
              placeholder="Numero d'inscription"  
              placeholderTextColor="#FFFFFF9C" 
              keyboardType="phone-pad"
              style={[styles.inputInscrip,{color:success}]}
              onChangeText={val=>setNumIns(val)}
              value={numIns}

              />
               
          </View>

          <Text style={{textAlign:'center',color:success}}> <Text >{text}</Text></Text>

          
          <TouchableOpacity style={[styles.btnInscription,{backgroundColor:coul}]} onPress={()=>navigation.navigate('ConfirmConect',{num:numero})} disabled={diseable}>
                        <Text style={{textAlign:'center',color:'white'}}>Connexion</Text>
          </TouchableOpacity>
          </ScrollView>
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
     marginLeft:60,marginRight:60,borderColor:'white',marginTop:'15%'
    },
    image: {
    flex: 1,  
    justifyContent:'center',
    
    },
    centerView:{
      marginTop:10, flexDirection:'row', borderBottomWidth:1,borderColor:'white'
    },
    btnInscription:{
      backgroundColor:'#216161', marginLeft:60,marginRight:60, height:40, justifyContent:'center',borderRadius:30,marginTop:40,marginBottom:'30%'
    },
    btnMap:{
      borderBottomWidth:1,width:wp('40%'),paddingTop:2,borderBottomColor:'#FFFFFF9C'
    },
    inputInscrip:{
      color: '#FFFFFF9C',paddingLeft:15
    }
   
  });

  
  