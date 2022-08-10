import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Date, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground} from 'react-native';
import BotonSiguienteRegistrarse from "../components/BotonSiguienteRegistrarse";
import fondo from "../assets/fondo.jpg";

const Registrarse =({navigation})=>{
    return (
      
      <View>

            <ImageBackground source={fondo} style={styles.image}>

            <Text style={styles.titulo}>Registrarse</Text>

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
            <TextInput   
              style={styles.dato}
              onChangeText={onChangeText}
              value={String}
              placeholder="Repetir Contraseña"
              
            />
               
        <BotonSiguienteRegistrarse
            text="SIGUIENTE" 
            onPress={ () =>{
            navigation.navigate('SeleccionarUsuario')
        }}
        />
        </ImageBackground>
    </View>
  );  
  }
  
  export default Registrarse
  
  const styles = StyleSheet.create({
   
    titulo: {
      top: '8%',
      marginLeft:'-36%',
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