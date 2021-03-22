import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { View ,Image, Text, StyleSheet, StatusBar,TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RefuseScan=()=>{ 
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
                    <View>
                        <Text style={{color:'white',fontSize:18,padding:hp('5%')}}>SCAN</Text>
                    </View>
               
            </View>
            <View style={styles.containerCard}>
                
               <View>
                   <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,margin:35,padding:15,borderColor:'#707070',backgroundColor:'#1F4F4D',shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,}}>
                       <Entypo name="circle-with-cross" color="red" size={100} style={{marginBottom:15}}/>
                       <Text style={{color:"white", opacity:0.7,fontSize:18}}>Le document que vous avez scanné{'\n'}n'a pas été édité par un cabinet{'\n'}d'expert-comptable</Text>
                        
                        <TouchableOpacity style={{backgroundColor:'#216161',width:320, height:40, justifyContent:'center',borderRadius:30,marginTop:40,marginBottom:'3%'}} onPress={()=>navigation.navigate('ConfirmConect',{num:numero})}>
                            <Text style={{textAlign:'center',color:'white'}}>Retour</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:'#216161',width:320, height:40, justifyContent:'center',borderRadius:30,marginBottom:'14%'}} onPress={()=>navigation.navigate('ConfirmConect',{num:numero})}>
                            <Text style={{textAlign:'center',color:'white'}}>Valider</Text>
                        </TouchableOpacity>
                   </View>
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
        marginTop:hp('3%')
    },
    containerCard:{
        flex:1,
        backgroundColor:'#1F4F4F',marginTop:hp('-2%')

    }
})

export default RefuseScan;
    