import React, { useState,useEffect,useRef } from 'react';
import { View ,Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { Modal } from 'react-native-paper';

const Scan =()=> {
    
    const scanner=useRef(null)
    const [scan,setScan]=useState(false)
    const [result,setResult]=useState(null)
  
    useEffect(()=>{
        setResult(null)
    },[])
  
    const onSuccess = e => {
  
      setResult(e)
      setScan(false)
  
      if(e.data.substring(0,4) === 'http'){
          alert(e.data)
      }
      
     // Linking.openURL(e.data).catch(err =>
      //  console.error('An error occured', err)
      //);
    };
  
    
    return (
        <View style={styles.containerContact}>
            <Modal visible={result}>
           <Text>{JSON.stringify(result,null,2)}</Text>
            </Modal>
            <View style={[styles.centerBtn,{flexDirection:'row',justifyContent:'space-between'}]}>
                <Image source={require('../assets/logoId.png')} style={{width:25,height:35}}/>
                <MaterialCommunityIcons name="menu" color="white" size={30}/>
            </View>

            <View style={[styles.centerBtn,{alignItems:'center',marginTop:'10%'}]}>
                <Text style={{color:'white'}}>Nom du cabinet</Text>
            </View>
            <View style={[styles.containerCard,,{alignItems:'center',marginTop:'10%'}]}>
             
                        <View>
         
                        <QRCodeScanner
                            onRead={onSuccess}
                            ref={scanner}
                            reactivate={true}
                            showMarker={true}
                            
                        />
  
                </View>
                

            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
      },
    containerContact:{
        backgroundColor:'#215D5D',flex:1
    },
    centerBtn:{
        marginLeft:20,marginRight:20,
        marginTop:10
    },
    containerCard:{
        flex:1,
        backgroundColor:'#1F4F4F',marginBottom:35

    },
    cardCenter:{
        flexDirection:'row',
        justifyContent:'space-evenly', 
        flexWrap:'wrap',
    },
    cardView1:{
        backgroundColor:'#1F4F4F',
        padding:6,
        color:'white' ,
        marginBottom:0.5,
    },
    cardView2:{backgroundColor:'#1F4F4F',padding:10,color:'white' 
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
      },
      textBold: {
        fontWeight: '500',
        color: '#000'
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
        marginBottom:'30%'
      },
      buttonTouchable: {
        padding: 16
      }

})

    
export default Scan