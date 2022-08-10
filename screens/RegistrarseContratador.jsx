import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Date, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground} from 'react-native';
import BotonSiguienteRegistrarse from "../components/BotonSiguienteRegistrarse";
import fondo from "../assets/fondo.jpg";

const RegistrarseContratador =({navigation})=>{
    return (
      
      <View>

            <ImageBackground source={fondo} style={styles.image}>

            <Text style={styles.titulo}>Datos personales</Text>

            <TextInput   
              style={styles.dato}
              onChangeText={onChangeText}
              value={String}
              placeholder="Nombre y Apellido"
              
            />
            <TextInput
              style={styles.dato}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Número de Celular"
              keyboardType="numeric"
            />
            <TextInput   
              style={styles.dato}
              onChangeText={onChangeDate}
              value={Date}
              placeholder="DD/MM/AA"
              
            />
             <TextInput   
              style={styles.dato}
              onChangeText={onChangeText}
              value={String}
              placeholder="Insertar foto de DNI"
            />
          
            <Text style={{ marginLeft:'11%', marginRight:'10%', fontSize: 13,  top: '9%'}}>By singing up, you agree to Photo's Terms of service and Privacy Policy</Text>  
           
        <BotonSiguienteRegistrarse
            text="SIGUIENTE" 
            onPress={ () =>{
            navigation.navigate('Inicio')
        }}
        />
        </ImageBackground>
    </View>
  );  
  }
  
  export default RegistrarseContratador
  
  const styles = StyleSheet.create({
   
    titulo: {
      top: '8%',
      marginLeft:'-13%',
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