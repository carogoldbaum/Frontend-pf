import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, InlineImage, TouchableOpacity, TextInput,} from 'react-native';
import Boton_3 from "../components/Boton_3";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


const Registrarse =({navigation})=>{
  
    return (
      
      <View>
            <Text style={styles.dato}>Datos personales</Text>
            <TextInput style={styles.dato} placeholder="Nombre y apellido" />
            <TextInput style={styles.dato} placeholder="Numero de celular" />
            <TextInput style={styles.dato} placeholder="DD/MM/AA" />
            <TextInput style={styles.dato} placeholder="Numero de celular" />
            
            
            <Text>By singing up, you agree to Photo's Terms of service and Privacy Policy</Text>
            <TextInput type="submit" />
           
        <Boton_3 style={styles.boton}
            text="SIGUIENTE" 
            onPress={ () =>{
            navigation.navigate('Inicio')
        }}
        />

    </View>
  );  
  }
  
  export default Registrarse
  
  const styles = StyleSheet.create({
    dato: {
      fontSize: 20,
        marginTop:'10%',
        marginLeft:'10%',
        width: '80%',
        alignItems: 'center',
        borderWidth: 1,
        padding:'4%',

      },
    
      boton: {
        backgroundColor: 'black',
        borderRadius: 70,
        padding: 15,
        marginTop:'5%',
        width: '47%'
      },
        
  });