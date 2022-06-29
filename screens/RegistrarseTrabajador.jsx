import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Date, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String} from 'react-native';
import SiguienteRegistrarse from "../components/SiguienteRegistrarse";
import { useNavigation } from '@react-navigation/native';
import SelectList from 'react-native-dropdown-select-list'

const RegistrarseTrabajador =({navigation})=>{

  const [selected, setSelected] = React.useState("");
  const data = [
    {key:'1',value:'Jammu & Kashmir'},
    {key:'2',value:'Himachal Pradesh'},
    {key:'3',value:'West Bengal'},
  ];

    return (
      
      <View>
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
            <View style={styles.dato}>
  
              <SelectList setSelected={setSelected} data={data}/>

            </View>


            <Text style={{ marginLeft:'11%', marginRight:'10%', fontSize: 13,  top: '17%'}}>By singing up, you agree to Photo's Terms of service and Privacy Policy</Text>
            
           
        <SiguienteRegistrarse
            text="SIGUIENTE" 
            onPress={ () =>{
            navigation.navigate('Inicio')
        }}
        />

    </View>
  );  
  }
  
  export default RegistrarseTrabajador
  
  const styles = StyleSheet.create({
   
    titulo: {
      top: '15%',
      marginLeft:'10%',
      fontSize: 30,
      },

    dato: {
      fontSize: 18,
        marginTop:'5%',
        marginLeft:'10%',
        width: '80%',
        alignItems: 'center',
        borderWidth: 2,
        padding:'3%',
        top: '15%'

      },
    
   
        
  });