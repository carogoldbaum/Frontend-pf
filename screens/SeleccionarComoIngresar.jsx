import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import fondo from "../assets/fondo.jpg";
import LogoTextoSeleccionar from "../components/LogoTextoSeleccionar";
import BotonContratarSeleccionar from "../components/BotonContratarSeleccionar";
import EspacioTransTrabajarSeleccionar from "../components/EspacioTransTrabajarSeleccionar";
import EspacioTransContratarSeleccionar from "../components/EspacioTransContratarSeleccionar ";
import BotonTrabajarSeleccionar from '../components/BotonTrabajarSeleccionar';
import { useNavigation } from '@react-navigation/native';

const SeleccionarComoIngresar =({navigation})=>{
  
  return (
    
    <View>

      <ImageBackground source={fondo} style={styles.image}>
        
      <LogoTextoSeleccionar/>

      <BotonTrabajarSeleccionar/>

      <EspacioTransTrabajarSeleccionar
          onPress={ () =>{
          navigation.navigate('HomeTrabajador')
          }}
          
      />

     <BotonContratarSeleccionar/>
   
     <EspacioTransContratarSeleccionar 
          onPress={ () =>{
          navigation.navigate('HomeTrabajador')
          }}
          
      />

      </ImageBackground>
    </View>
    
  );
}

export default SeleccionarComoIngresar

const styles = StyleSheet.create({

  image: {
    height:'100%',
    width: '100%',
    alignItems: 'center',
    
  },
    
});