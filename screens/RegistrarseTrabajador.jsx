import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Date, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground} from 'react-native';
import SiguienteRegistrarse from "../components/SiguienteRegistrarse";
import { useNavigation } from '@react-navigation/native';
import SelectList from 'react-native-dropdown-select-list'
import fondo from "../assets/fondo.jpg";
import axios from 'axios';
import RNPickerSelect from "react-native-picker-select";
import Picker from "../components/Picker";
import register from "../services/formRegistrarseTrabajador";


const RegistrarseTrabajador =({navigation})=>{

  const [selected, setSelected] = React.useState("");

  const [loaded, setLoaded] = React.useState(false);
const [rubros,setRubros] = useState({
  NombreyApellido: '',
  NumCel: '',
  Fecha: '',
});

/*state={rubros:[]}

  useEffect() = () => {
    axios
    .get("")
    .then(response=>{console.log(response)})
    .catch(error=>{console.log(error)});
}
*/

const form = async (i) => {
  if(!rubros.NombreyApellido){
    console.log("joyaa")
      Alert.alert("Por favor complete el campo")
  }else{}
} 

  
    return (
      
      <View style={styles.dato}>

           

            <Text style={styles.titulo}>Datos personales</Text>

            <TextInput  
            style={styles.input} 
              onChangeText={text => setRubros({...rubros, NombreyApellido: text}) }
              value={rubros.NombreyApellido}
              placeholder="Nombre y Apellido"
              
              
            />
            <TextInput
            style={styles.input} 
              onChangeText={text => setRubros({...rubros, NumCel: number}) }
              value={rubros.NumCel}
              placeholder="Número de Celular"
              keyboardType="numeric"
            />
            <TextInput   
            style={styles.input} 
              onChangeText={text => setRubros({...rubros, Fecha: Date}) }
              value={rubros.Fecha}
              placeholder="DD/MM/AA"
              
            />
            

            
              <Picker style={styles.input}  />

              <TextInput   
             style={styles.input} 
              onChangeText={onChangeText}
              value={String}
              placeholder="Nombre y Apellido"
              
            />

            <Text style={{ marginLeft:'11%', marginRight:'10%', fontSize: 13,  top: '9%'}}>By singing up, you agree to Photo's Terms of service and Privacy Policy</Text>
            
           
        <SiguienteRegistrarse 
            type="sumbit"
            text="SIGUIENTE" 
            onPress={form}
           
        />
    </View>
  );  
  }
  
  export default RegistrarseTrabajador
  
  const styles = StyleSheet.create({
   
    titulo: {
      top: '8%',
      marginLeft:'-13%',
      fontSize: 34,
      marginRight: 'auto',
      marginLeft: 'auto',
      },

    dato: {
      fontSize: 18,
        marginTop:'5%',
        marginLeft:'0%',
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderWidth: 2,
        padding:'3%',
        top: '8%',
        display:"flex",

      },

      input: {
        fontSize: 18,
          marginTop:'5%',
          marginLeft:'0%',
          width: '80%',
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