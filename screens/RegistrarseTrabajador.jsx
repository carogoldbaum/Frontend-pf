import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Date, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground} from 'react-native';
import BotonSiguienteRegistrarse from "../components/BotonSiguienteRegistrarse";
import fondo from "../assets/fondo.jpg";
import SelectDropdown from 'react-native-select-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';

function RegistrarseTrabajador() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Niñera', value: 'Niñera'},
    {label: 'Pintor', value: 'Pintor'},
    {label: 'Albañil', value: 'Albañil'},
    {label: 'Plomero', value: 'Plomero'},
    {label: 'Gasista', value: 'Gasista'},
    {label: 'Profesor', value: 'Profesor'},
    {label: 'Limpieza', value: 'Limpieza'},
    {label: 'Electricista', value: 'Electricista'},
  
  
  ]);


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
            <DropDownPicker
            style={styles.DropDownPicker}
            placeholder="Seleccionar Rubros"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
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

  export default RegistrarseTrabajador
  
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

      DropDownPicker: {
          fontSize: 18,
          marginTop:'5%',
          marginLeft:'10%',
          width: '80%',
          alignItems: 'center',
          borderWidth: 2,
          top: '18%',
          borderRadius: 0,
          backgroundColor:'transparent'
        },
    
      image: {
        height:'100%',
        width: '100%',
        alignItems: 'center',
        
      },
   
        
  });