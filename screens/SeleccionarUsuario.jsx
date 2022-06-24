import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import fondo from "../assets/fondo.jpg";
import LogoTexto from "../components/LogoTexto";
import BotonContratar from "../components/BotonContratar";


import BotonTrabajar from '../components/BotonTrabajar';
import { useNavigation } from '@react-navigation/native';

const SeleccionarUsuario =({navigation})=>{
  
  return (
    
    <View>

      <ImageBackground source={fondo} style={styles.image}>
        
      <LogoTexto source={LogoTexto} style={styles.logotexto}>
      </LogoTexto>

      <BotonTrabajar
      text="TRABAJAR" 
      onPress={ () =>{
        navigation.navigate('Registrarse')
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