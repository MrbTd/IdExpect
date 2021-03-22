import React,{useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    ImageBackground
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 300;

const ConfirmConect = ({num="+225 00 00 00 00",navigation,route,params}) =>{

const image1 = require('../assets/fontIme.png')
const image2 = require('../assets/fontBleu.png')
const image3 = require('../assets/fontrace.png')
const [isSelected, setSelection] = useState(false);

console.log('route',route.params)
    return (
        <View
        style={styles.container}
        >
         <StatusBar
       barStyle="light-content"
       backgroundColor="#1F4F4F"
       showHideTransition="slide"
       />
      
        <ImageBackground source={image1} style={styles.image}>
        <ImageBackground source={image2} style={styles.image}>
        <ImageBackground source={image3} style={styles.image} >

            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={[styles.text, {fontSize:20,color:'#1F4F4F',marginTop:hp('8%')}]}>Verification de coordonner</Text>
                    <Text style={[styles.text, {fontSize:18,marginTop:hp('5%'),color:'#000000E0'}]}>Est-ce votre numero de telephone ?</Text>
                    <Text style={{color:'#000000E0' }}>{route.params.num}</Text>
                    <Text style={{color:'#000000E0',fontSize:18,marginRight:wp('8%'),marginLeft:wp('8%')}}>
                        Vous allez recevoir deux codes d'autentification.Un par SMS et le second code a l'adresse email.
                    
                    </Text>
                    <Text style={{color:'#000000E0',marginTop:10}}>util***********@gmail.com</Text>
                   
                    <TouchableOpacity style={{backgroundColor:'#0E787E',width:wp('78%'),height:hp('8%'),justifyContent:'center',marginTop:30,borderRadius:30}} onPress={()=>navigation.navigate('Activation')}>
                        <Text style={{textAlign:'center',color:'white'}}>VALIDER</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
            </ImageBackground>
            </ImageBackground>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1, 
      
    },
    modal:{
        height:550,
        paddingTop:20,
        backgroundColor: 'rgba(252,252,252, 0.6)',
        borderRadius:20,
        marginLeft:wp('8%'),
        marginRight:wp('8%')
       
    },
    textView:{
        flex:1,
        alignItems:'center'
    },
    text:{
        margin:5,
        fontSize:16,
        color:'black'
    },
    buttonView:{
        width:wp('100%'),
        flexDirection:'row'
    },
    
    image: {
       flex: 1,  
       justifyContent:'center',
                
      }
            
  });

export default ConfirmConect;
