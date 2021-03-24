import React,{useState} from 'react';
import { View ,Image, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Evenement({navigation}) {
    const [part,setPart]=useState(true)
    const evene=[
        {
            id:1,
            img:'https://cdn-images-1.medium.com/max/1200/1*ja00hKhtteM--LqjMB8ClA.jpeg',
            date:'10 Mars',
            tit:"Titre de l'evenement",
            cap:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page',
            lieu:'cocody angre soleil 2',
            im:"https://pbs.twimg.com/media/EOLYs8jW4AEx17e.jpg"
        },
        {
            id:2,
            img:'https://cdn-images-1.medium.com/max/1200/1*ja00hKhtteM--LqjMB8ClA.jpeg',
            date:'10 Mars',
            tit:"Titre de l'evenement",
            cap:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page',
            lieu:'cocody angre soleil 2',
            im:"https://pbs.twimg.com/media/EOLYs8jW4AEx17e.jpg"
        },
        {
            id:3,
            img:'https://cdn-images-1.medium.com/max/1200/1*ja00hKhtteM--LqjMB8ClA.jpeg',
            date:'10 Mars',
            tit:"Titre de l'evenement",
            cap:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page',
            lieu:'cocody angre soleil 2',
            im:"https://pbs.twimg.com/media/EOLYs8jW4AEx17e.jpg"
        },
        {
            id:4,
            img:'https://cdn-images-1.medium.com/max/1200/1*ja00hKhtteM--LqjMB8ClA.jpeg',
            date:'10 Mars',
            tit:"Titre de l'evenement",
            cap:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page',
            lieu:'cocody angre soleil 2',
            im:"https://pbs.twimg.com/media/EOLYs8jW4AEx17e.jpg"
        },
        {
            id:5,
            img:'https://cdn-images-1.medium.com/max/1200/1*ja00hKhtteM--LqjMB8ClA.jpeg',
            date:'10 Mars',
            tit:"Titre de l'evenement",
            cap:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page',
            lieu:'cocody angre soleil 2',
            im:"https://pbs.twimg.com/media/EOLYs8jW4AEx17e.jpg"
        },
        {
            id:6,
            img:'https://cdn-images-1.medium.com/max/1200/1*ja00hKhtteM--LqjMB8ClA.jpeg',
            date:'10 Mars',
            tit:"Titre de l'evenement",
            cap:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page',
            lieu:'cocody angre soleil 2',
            im:"https://pbs.twimg.com/media/EOLYs8jW4AEx17e.jpg"
        },
        {
            id:7,
            img:'https://cdn-images-1.medium.com/max/1200/1*ja00hKhtteM--LqjMB8ClA.jpeg',
            date:'10 Mars',
            tit:"Titre de l'evenement",
            cap:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page',
            lieu:'cocody angre soleil 2',
            im:"https://pbs.twimg.com/media/EOLYs8jW4AEx17e.jpg"
        },
        {
            id:8,
            img:'https://cdn-images-1.medium.com/max/1200/1*ja00hKhtteM--LqjMB8ClA.jpeg',
            date:'10 Mars',
            tit:"Titre de l'evenement",
            cap:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page',
            lieu:'cocody angre soleil 2',
            im:"https://pbs.twimg.com/media/EOLYs8jW4AEx17e.jpg"
        },
        {
            id:9,
            img:'https://cdn-images-1.medium.com/max/1200/1*ja00hKhtteM--LqjMB8ClA.jpeg',
            date:'10 Mars',
            tit:"Titre de l'evenement",
            cap:'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page',
            lieu:'cocody angre soleil 2',
            im:"https://pbs.twimg.com/media/EOLYs8jW4AEx17e.jpg"
        }
    ]
    return (
        <View style={styles.containerContact}>
             <StatusBar
                
                backgroundColor="#1F4F4F"r
                
            />
            <View style={[styles.centerBtn,{flexDirection:'row',justifyContent:'space-between'}]}>
                <Image source={require('../assets/logoId.png')} style={{width:25,height:35}}/>
                <MaterialCommunityIcons name="menu" color="white" size={30}/>
            </View>

            <View style={[styles.centerBtn,{alignItems:'center',marginBottom:20}]}>
                <Text style={{color:'white'}}>EVENEMENT</Text>
            </View>
            <View style={styles.containerCard}>
                <View style={{margin:20,backgroundColor:'#A6DBDB',borderRadius:15,height:'81%'}}>
                    <View style={{margin:15}}>
                        <View>
                            <FlatList
                                data={evene}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({item})=>
                                <View style={{borderTopWidth:1,borderRightWidth:1,borderLeftWidth:1,borderColor:'#A6DBDF',borderTopRightRadius:10,borderTopLeftRadius:10,marginBottom:20}}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('ItemEvenement',item)}>      
                                    <Image source={{uri:item.img}} style={{height:260,borderTopRightRadius:10,borderTopLeftRadius:10}} resizeMode="cover"/>
                                    </TouchableOpacity>
                                    
                                    <View style={{backgroundColor:'#215D5D',flexDirection:'row',alignItems:'center'}}>
                                   
                                        <View style={{borderRightWidth:1,borderRightColor:'white',height:90,padding:5,justifyContent:'center'}}>
                                            <Text style={{color:'white'}}>{item.date}</Text>
                                        </View>

                                        <View style={{paddingHorizontal:18,marginRight:50,}}>
                                            <TouchableOpacity style={{backgroundColor:'#08AAAA',width:wp('45%'),borderRadius:10,top:hp('-1%'),left:wp('15%')}} onPress={()=>setPart(!part)}>
                                            <Text style={{textAlign:'center',color:'#fffff1',}}>{part? 'Participer':'Je participe plus'}</Text>
                                            </TouchableOpacity>

                                            <Text style={{color:'white',opacity:0.8}}>{item.tit}</Text>
                                            <Text style={{paddingRight:10,paddingBottom:5,color:'white',opacity:0.8}}>{item.cap}</Text>
                                        </View>
                                        
                                    </View>
                                </View>
                            
                            }
                            />
                            

                        </View>
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
        marginLeft:20,marginRight:20,
        marginTop:10
    },
    containerCard:{
        flex:1,
        backgroundColor:'#1F4F4F',marginBottom:35

    },
    cardView1:{
        backgroundColor:'#1F4F4F',
        padding:6,
        color:'white' ,
        marginBottom:0.5,
    },
    cardView2:{backgroundColor:'#1F4F4F',padding:10,color:'white' }

})

export default Evenement;
