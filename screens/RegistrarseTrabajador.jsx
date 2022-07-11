import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Date, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground} from 'react-native';
import SiguienteRegistrarse from "../components/SiguienteRegistrarse";
import { useNavigation } from '@react-navigation/native';
import SelectList from 'react-native-dropdown-select-list'
import fondo from "../assets/fondo.jpg";
import rubro from "../Rubro.json";
import axios from 'axios';
import RNPickerSelect from "react-native-picker-select";
import Picker from "../components/Picker";

const RegistrarseTrabajador =({navigation})=>{

  const [selected, setSelected] = React.useState("");
/*  
  const data = [
    {key:'1',value:'Jammu & Kashmir'},
    {key:'2',value:'Himachal Pradesh'},
    {key:'3',value:'West Bengal'},
  ];*/
  const [loaded, setLoaded] = React.useState(false);
const [rubros,setRubros] = useState([]);

/*state={rubros:[]}

  useEffect() = () => {
    axios
    .get("")
    .then(response=>{console.log(response)})
    .catch(error=>{console.log(error)});
}
*/

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
            <View style={styles.dato}>

            
              <Picker/>



            </View>


            <Text style={{ marginLeft:'11%', marginRight:'10%', fontSize: 13,  top: '9%'}}>By singing up, you agree to Photo's Terms of service and Privacy Policy</Text>
            
           
        <SiguienteRegistrarse
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
    
      image: {
        height:'100%',
        width: '100%',
        alignItems: 'center',
        
      },
   
        
  });