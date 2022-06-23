import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import logo from "../assets/logo.png";
import fondo from "../assets/fondo.jpg";
import LogoTexto from "../components/LogoTexto";
import * as font from 'expo-font';
import BotonContratar from "../components/BotonContratar";

import { useNavigation } from '@react-navigation/native';
import BotonTrabajar from '../components/BotonTrabajar';


const SeleccionarUsuario =({navigation})=>{
  
  return (
    
    <View>

      <ImageBackground source={fondo} style={styles.image}>
        
      <LogoTexto source={LogoTexto} style={styles.logotexto}>
      </LogoTexto>

      <BotonTrabajar
      text="TRABAJAR" 
      onPress={ () =>{
        navigation.navigate('IniciarSesion')
      }}
      />
     <BotonContratar
      text="CONRTATAR" 
      onPress={ () =>{
        navigation.navigate('Registrarse')
      }}
      />
   
      </ImageBackground>
    </View>
    
  );
}

export default SeleccionarUsuario

const styles = StyleSheet.create({

  image: {
    height:'100%',
    width: '100%',
    alignItems: 'center',
    
  },

  logotexto: {
    height:'100%',
    width: '100%',
    alignItems: 'center',
  },
    
});