import React, {useEffect,useState} from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity,StatusBar,ImageBackground, Dimensions, Image} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 export default function Activation ({navigation}) {
    const [count, setCount] = useState(60);
    const [decomptVerif, setDecomptVerif] = useState(false);
    const [smsSaisi,setSmsSaisi]=useState('')
    const [mailSaisi,setMailSaisi]=useState('')
    let error1=true
    let error2=true

    const image1 = require('../assets/fontH.png')
    const image2 = require('../assets/fontBleu.png')

    
    
    useEffect(() => {
    setTimeout(() => {
           setCount(count-1);
         }, 1000);
         if(count===0){
            setDecomptVerif(true)
         }
       },);


    const numeroSms="azerty"
    const numeroMail="azerti"
    let text1=""
    let success1=""
    let nb1=0
    nb1=smsSaisi.length

       
    if(numeroSms===smsSaisi){
      success1="#1AA71E"
      text1=""
      error1=false
    }
    else if(numeroSms !==smsSaisi && nb1>4 ){
      success1="red"
      text1="Le code de securite SMS est errone"
  
    }
    else{
      success1="white"
      text1=""
    }


    let text2=""
    let success2=""
    let nb2=0
    nb2=mailSaisi.length

       
    if(numeroMail===mailSaisi){
      success2="#1AA71E"
      text2=""
      error2=false

   }
    else if(numeroMail !==mailSaisi && nb2>4 ){
      success2="red"
      text2="Le code de securite MAIL est errone"
  
    }
    else{
      success2="white"
      text2=""
    }



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
          <Text style={[styles.titleText,{fontSize:24}]}>Activez votre compte</Text>
          <Text style={[styles.titleText,{fontSize:17}]}>Vos codes on été envoyés avec succes.</Text>
          <Text style={[styles.titleText,{fontSize:18}]}>Vous allez recevoir deux codes {'\n'}
          d'autentification. Le premier par.{'\n'}
          SMS et le second sur ce email.{"\n"}
          Pour les saisir, vous avez des{'\n'} maintenant
          </Text>
          <Text style={{textAlign:'center',color:'#1F4F4F',marginTop:hp('2%')}}>{decomptVerif ? '00:00':`00:${count}`}</Text>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
             { (error1===true || error2===true)?<Text></Text>:<Image source={require('../assets/cadenar.png')} style={{width:wp('13%'),height:hp('5%')}}/>}
          </View>
         
          <TextInput 
            placeholder="66541223X" 
            placeholderTextColor="#1F4F4F" 
            style={[styles.inputActi,{color:success1}]}
            value={smsSaisi}
            onChangeText={val=>setSmsSaisi(val)}
          />

          <Text style={{textAlign:'center',color:success1}}> <Text >{text1}</Text></Text> 
          
          <TextInput 
            placeholder="66541223X" 
            placeholderTextColor="#1F4F4F" 
            style={[styles.inputActi,{color:success2}]}
            value={mailSaisi}
            onChangeText={val=>setMailSaisi(val)}
          />

           <Text style={{textAlign:'center',color:success2}}> <Text >{text2}</Text></Text> 


          <TouchableOpacity style={styles.btnActi} onPress={()=>navigation.navigate('Activation')} >
                        <Text style={styles.textbTn}>Renvoyez</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btnActi,{marginBottom:hp('5%'),
            backgroundColor:(error1===true || error2===true)? 'gray':'#0E787E'}]} 
            onPress={()=>navigation.navigate('ScreenDrawer')} 
            disabled={(error1===true || error2===true)? true:false}>

                        <Text style={styles.textbTn}>Continuez</Text>

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
        height:hp('87%'),
        paddingTop:20,
        backgroundColor: 'rgba(252,252,252, 0.6)',
        borderRadius:20,
        marginLeft:wp('8%'),
        marginRight:wp('8%')
       
    },
    image: {
       flex: 1,  
       justifyContent:'center',
    },
    btnActi:{
      marginLeft:wp('3%'),backgroundColor:'#0E787E',width:wp('78%'),height:hp('8%'),justifyContent:'center',marginTop:hp('2%'),borderRadius:30
    },
    textbTn:{
      textAlign:'center',color:'white',fontSize:18
    },
    inputActi:{
      borderBottomWidth:1,marginRight:wp('2%'),marginLeft:wp('2%'),textAlign:'center',color:"white"
    },
    titleText:{
      textAlign:'center',color:'#1F4F4F',marginTop:hp('2%')
    }

  });
  

  