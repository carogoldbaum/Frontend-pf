import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import fondo from "../assets/fondo.jpg";
import BotonIniciarSesionInicio from "../components/BotonIniciarSesionInicio";
import BotonRegistrarseInicio from "../components/BotonRegistrarseInicio";
import LogoTextoInicio from "../components/LogoTextoInicio";

import { useNavigation } from '@react-navigation/native';


const Inicio =({navigation})=>{
  
  return (
    
    <View>

      <ImageBackground source={fondo} style={styles.image}>
        
        <LogoTextoInicio/>

        <BotonIniciarSesionInicio style={{ fontSize: 48}}
          text="INICIAR SESION" 
          onPress={ () =>{
          navigation.navigate('HomeContratador')
        }}
        />
        <BotonRegistrarseInicio
          text="REGISTRARSE" 
          onPress={ () =>{
          navigation.navigate('Registrarse')
        }}
        />
   
      </ImageBackground>
    </View>
    
  );
}

export default Inicio

const styles = StyleSheet.create({

  image: {
    height:'100%',
    width: '100%',
    alignItems: 'center',
    
  },
});

