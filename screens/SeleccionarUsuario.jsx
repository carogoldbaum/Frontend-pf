import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import fondo from "../assets/fondo.jpg";
import LogoTextoSeleccionar from "../components/LogoTextoSeleccionar";
import BotonContratar from "../components/BotonContratar";

import BotonTrabajar from '../components/BotonTrabajar';
import { useNavigation } from '@react-navigation/native';

const SeleccionarUsuario =({navigation})=>{
  
  return (
    
    <View>

      <ImageBackground source={fondo} style={styles.image}>
        
      <LogoTextoSeleccionar source={LogoTexto} style={styles.LogoTextoSeleccionar}>
      </LogoTextoSeleccionar>

      <BotonTrabajar
      text="TRABAJAR" 
      onPress={ () =>{
        navigation.navigate('Registrarse')
      }}
      />
     <BotonContratar
      text="CONRTATAR" 
      onPress={ () =>{
        navigation.navigate('')
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

  LogoTextoSeleccionar: {
    height:'100%',
    width: '100%',
    alignItems: 'center',
  },
    
});