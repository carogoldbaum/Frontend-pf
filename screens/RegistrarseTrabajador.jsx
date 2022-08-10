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

  const [userState, setUserState] = useState({
    nombre: '',
    celular: '',
    fecha: ''
  });
  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

    return (
      
      <View>

            <ImageBackground source={fondo} style={styles.image}>

            <Text style={styles.titulo}>Datos personales</Text>

            <TextInput   
              style={styles.dato}
              onChangeText={text => setUserState({ ...userState, nombre: text })}
              value={userState.nombre}
              placeholder="Nombre y Apellido"
              
            />
            <TextInput
              style={styles.dato}
              onChangeText={text => setUserState({ ...userState, celular: text })}
              value={userState.celular}
              placeholder="Número de Celular"
              keyboardType="numeric"
            />
            <TextInput   
              style={styles.dato}
              onChangeText={text => setUserState({ ...userState, fecha: text })}
              value={userState.fecha}
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
            
            {error && <Text style={styles.alerta}>Completar datos</Text>}
           
        <BotonSiguienteRegistrarse
            disable={disable}
            text="SIGUIENTE" 
            onPress={async () =>{
              setDisable(true)
              if (userState.nombre==''||userState.celular==''||userState.fecha==''){
                setError(true)
              }
                else {
                  //await PostLogIn(userState).then(() => {
                      setDisable(false)
                      navigation.navigate('Inicio')
                    
                  //})
                  //.catch(() => {
                    //console.log("Datos mal")
                    //setError(true)
                   // setDisable(false)
               // });
              
          }setDisable(false)
        }
      }  
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
   
      alerta: {
        color: 'black',
        textAlign: 'center',
        top: '9%',
        fontSize: 20,
        width: '100%'
        },
  });