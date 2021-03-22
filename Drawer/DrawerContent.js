import React from 'react';
import { View ,StyleSheet,Image} from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper'

function DrawerContent({navigation,props}) {
    const [isDarkTheme,setIsDarkTheme]=React.useState(false)
    
    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{flex:1,backgroundColor:'#0E787E'}}>
            <DrawerContentScrollView {...props}>

                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{alignItems:'center',marginTop:"25%"}}>
                            <Avatar.Image
                                source={require('../assets/boni.png')}
                                size={100}
                            />
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title}>Franck Boni</Title>
                                <Caption style={styles.caption}>Nom du cabinet</Caption>
                            </View>
                        </View>
                        
                       

                    </View>
                    
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                                icon={()=><Image source={require('../assets/scan.png') } style={{width:35, height:35}} />}

                                label="Code de sécurite"
                                labelStyle={{color:'white'}}
                                onPress={()=>{navigation.navigate('Scan')}}
                            />
                            <DrawerItem

                                icon={()=><Image source={require('../assets/calendar.png') } style={{width:35, height:35}} />}

                                label="Evenement"
                                labelStyle={{color:'white'}}
                                onPress={()=>{navigation.navigate('Evenement')}}
                            />
                            
                            <DrawerItem

                            icon={()=><Image source={require('../assets/cloche.png') } style={{width:35, height:35}} />}

                                label="Notifications"
                                labelStyle={{color:'white'}}
                                onPress={()=>{navigation.navigate('Notification')}}
                            />

                            <DrawerItem
                                icon={()=><Image source={require('../assets/call.png') } style={{width:35, height:35}} />}

                                label="Contacts"
                                labelStyle={{color:'white'}}
                                onPress={()=>{navigation.navigate('Contact')}}
                            />  

                           
   
                    </Drawer.Section>

                   
                </View>

            </DrawerContentScrollView>
            
            
        </View>
    );
}
const styles =StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        color:'white'
    }
})
export default DrawerContent;