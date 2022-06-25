import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import logo from "../assets/logo.png";
import fondo from "../assets/fondo.jpg";
import LoginInicio from "../components/LoginInicio";
import RegisterInicio from "../components/RegisterInicio";
import LogoTexto2 from "../components/LogoTexto";
import * as font from 'expo-font';

import { useNavigation } from '@react-navigation/native';


const Inicio =({navigation})=>{
  
  return (
    
    <View>

      <ImageBackground source={fondo} style={styles.image}>
        
      <LogoTexto2>
      </LogoTexto2>

      <LoginInicio style={{ fontSize: 48}}
      text="INICIAR SESION" 
      onPress={ () =>{
        navigation.navigate('Registrarse')
      }}
      />
     <RegisterInicio
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

