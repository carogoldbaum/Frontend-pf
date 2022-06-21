import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import logo from "../assets/logo.png";
import fondo from "../assets/fondo.jpg";
import LogoTexto from "../components/LogoTexto";
import * as font from 'expo-font';
import botonContratar from "../components/botonContratar";

import { useNavigation } from '@react-navigation/native';


const seleccionarUsuario =({navigation})=>{
  
  return (
    
    <View>

      <ImageBackground source={fondo} style={styles.image}>
        
      <LogoTexto>
      </LogoTexto>

      <botonContratar
      text="TRABAJAR" 
      onPress={ () =>{
        navigation.navigate('IniciarSesion')
      }}
      />
     <botonContratar
      text="CONRTATAR" 
      onPress={ () =>{
        navigation.navigate('Registrarse')
      }}
      />
   
      </ImageBackground>
    </View>
    
  );
}

export default seleccionarUsuario

const styles = StyleSheet.create({

  image: {
    height:'100%',
    width: '100%',
    alignItems: 'center',
    
  },
});