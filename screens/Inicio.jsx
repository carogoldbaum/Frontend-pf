import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import logo from "../assets/logo.png";
import fondo from "../assets/fondo.jpg";
import Boton_1 from "../components/Boton_1";
import Boton_2 from "../components/Boton_2";
import LogoTexto from "../components/LogoTexto";
import * as font from 'expo-font';

import { useNavigation } from '@react-navigation/native';


const Inicio =({navigation})=>{
  
  return (
    
    <View>

      <ImageBackground source={fondo} style={styles.image}>
        
      <LogoTexto>
      </LogoTexto>

      <Boton_1 style={{ fontSize: 48}}
      text="INICIAR SESION" 
      onPress={ () =>{
        navigation.navigate('IniciarSesion')
      }}
      />
     <Boton_2
      text="REGISTRARSE" 
      onPress={ () =>{
        navigation.navigate('SeleccionarUsuario')
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

