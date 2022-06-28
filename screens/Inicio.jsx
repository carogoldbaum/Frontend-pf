import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import fondo from "../assets/fondo.jpg";
import LoginInicio from "../components/LoginInicio";
import RegistrarseInicio from "../components/RegistrarseInicio";
import LogoTextoInicio from "../components/LogoTextoInicio";

import { useNavigation } from '@react-navigation/native';


const Inicio =({navigation})=>{
  
  return (
    
    <View>

      <ImageBackground source={fondo} style={styles.image}>
        
      <LogoTextoInicio>
      </LogoTextoInicio>

      <LoginInicio style={{ fontSize: 48}}
      text="INICIAR SESION" 
      onPress={ () =>{
        navigation.navigate('')
      }}
      />
     <RegistrarseInicio
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

