import React from 'react';
import { View ,Image, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Contact(props) {
    
    return (
        <View style={styles.containerContact}>
            <View style={[styles.centerBtn,{flexDirection:'row',justifyContent:'space-between'}]}>
                <Image source={require('../assets/logoId.png')} style={{width:25,height:35}}/>
                <MaterialCommunityIcons name="menu" color="white" size={30}/>
            </View>

            <View style={[styles.centerBtn,{alignItems:'center',marginBottom:20}]}>
                <Text style={{color:'white'}}>NOTIFICATION</Text>
            </View>
            <View style={styles.containerCard}>
                <View style={{margin:20,backgroundColor:'#A6DBDB',borderRadius:15,height:'81%'}}>
                    <ScrollView style={{margin:10}}>
                        <View style={styles.cardCenter}>
                            <View >
                                    <Text style={[,styles.cardView1,{borderTopLeftRadius:15}]}>10 mars 2021</Text> 
                                    <Text style={styles.cardView2}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={[,styles.cardView1,{borderTopRightRadius:15}]}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10, borderBottomLeftRadius:15}]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>10 mars 2021</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10, borderBottomRightRadius:15}]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            

                        </View>
                    </ScrollView>

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
        marginLeft:20,marginRight:20,
        marginTop:10
    },
    containerCard:{
        flex:1,
        backgroundColor:'#1F4F4F',

    },
    cardCenter:{
        flexDirection:'row',
        justifyContent:'space-evenly', 
        flexWrap:'wrap',marginTop:10,marginBottom:10
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