import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import * as Animatable from 'react-native-animatable';

const image1 = require('../assets/fontIme.png')
const image2 = require('../assets/fontBleu.png')

const Debut = ({navigation}) => (
  <View style={styles.container} >
    <ImageBackground source={image1} style={styles.image}>
    <ImageBackground source={image2} style={styles.image}>
        <View style={{alignItems:'center'}}>
        <Animatable.Image source={require('../assets/logoId.png')} style={{width:102, height:90, }} delay={1000} animation="fadeOutUpBig" duration={2000}/>
        </View>
    </ImageBackground>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,  
    justifyContent:'center'
  
  }
});

export default Debut;