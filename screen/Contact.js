import React from 'react';
import { View ,Image, Text, StyleSheet, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Contact(props) {
    
    return (
        <View style={styles.containerContact}>
            <View style={[styles.centerBtn,{flexDirection:'row',justifyContent:'space-between'}]}>
                <Image source={require('../assets/logoId.png')} style={{width:25,height:35}}/>
                <MaterialCommunityIcons name="menu" color="white" size={30}/>
            </View>

            <View style={[styles.centerBtn,{alignItems:'center',marginBottom:20}]}>
                <Text style={{color:'white'}}>LISTE DES CONTACT</Text>
            </View>
            <View style={styles.containerCard}>
                <View style={{margin:20,backgroundColor:'#A6DBDB',borderRadius:15,height:'81%'}}>
                    <ScrollView style={{margin:10}}>
                        <View style={styles.cardCenter}>
                            
                            <View >
                                    <Text style={[,styles.cardView1,{borderTopLeftRadius:15}]}>CONTACT 1</Text> 
                                    <Text style={styles.cardView2}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={[,styles.cardView1,{borderTopRightRadius:15}]}>CONTACT 2</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 3</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 4</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 5</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 6</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 7</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 8</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 9</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 10</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 11</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 12</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 13</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 14</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10 }]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 15</Text> 
                                    <Text style={[styles.cardView2,{marginBottom:10, borderBottomLeftRadius:15}]}>Sujet du message{'\n'}Lorem ipsum</Text>
                            </View>
                            
                            <View >
                                    <Text style={styles.cardView1}>CONTACT 16</Text> 
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
    cardView2:{backgroundColor:'#1F4F4F',padding:10,color:'white' }

})

export default Contact;