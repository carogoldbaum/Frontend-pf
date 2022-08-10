import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Date, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground} from 'react-native';
import BotonIniciarSesion from "../components/BotonIniciarSesion";
import fondo from "../assets/fondo.jpg";
import OlvideContraseña from "../components/OlvideContraseña"

const IniciarSesion =({navigation})=>{
    return (
      
      <View>

            <ImageBackground source={fondo} style={styles.image}>

            <Text style={styles.titulo}>Iniciar Sesion</Text>

            <TextInput   
              style={styles.dato}
              onChangeText={onChangeText}
              value={String}
              placeholder="Correo electronico"
              
            />
            <TextInput
              style={styles.dato}
              onChangeText={onChangeText}
              value={String}
              placeholder="Contraseña"
            />
               
               <OlvideContraseña
                onPress={ () =>{
                navigation.navigate('RestablecerContraseña')
                }}
                 />
            

        <BotonIniciarSesion
            text="INGRESAR" 
            onPress={ () =>{
            navigation.navigate('SeleccionarComoIngresar')
        }}
        />
        </ImageBackground>
    </View>
  );  
  }
  
  export default IniciarSesion
  
  const styles = StyleSheet.create({
   
    titulo: {
      top: '8%',
      marginLeft:'-28%',
      fontSize: 34,

      },

    dato: {
      fontSize: 18,
        marginTop:'5%',
        marginLeft:'0%',
        width: '80%',
        alignItems: 'center',
        borderWidth: 2,
        padding:'3%',
        top: '8%',

      },
    
      image: {
        height:'100%',
        width: '100%',
        alignItems: 'center',
        
      },
   
        
  });