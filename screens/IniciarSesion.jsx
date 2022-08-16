import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Date, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground} from 'react-native';
import BotonIniciarSesion from "../components/BotonIniciarSesion";
import fondo from "../assets/fondo.jpg";
import OlvideContraseña from "../components/OlvideContraseña"

const IniciarSesion =({navigation})=>{

  const [userState, setUserState] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

    return (
      
      <View>

            <ImageBackground source={fondo} style={styles.image}>

            <Text style={styles.titulo}>Iniciar Sesion</Text>

            <TextInput   
              style={styles.dato}
              onChangeText={text => setUserState({ ...userState, email: text })}
              value={userState.email}
              placeholder="Correo electronico"
              
            />
            <TextInput
              style={styles.dato}
              onChangeText={text => setUserState({ ...userState, password: text })}
              value={userState.password}
              placeholder="Contraseña"
              secureTextEntry={true}
            />
               
               <OlvideContraseña
                onPress={ () =>{
                navigation.navigate('RestablecerContraseña')
                }}
                 />

                 
            {error && <Text style={styles.alerta}>Completar datos</Text>}

        <BotonIniciarSesion
            text="INGRESAR" 
            onPress={async () =>{
              setDisable(true)
              if (userState.email==''||userState.password==''){
                setError(true)
              }
                else {
                  //await PostLogIn(userState).then(() => {
                      setDisable(false)
                      navigation.navigate('SeleccionarComoIngresar')
                    
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
        backgroundColor: '#F4F4F4',

      },
    
      image: {
        height:'100%',
        width: '100%',
        alignItems: 'center',
        
      },

      alerta: {
        color: 'black',
        textAlign: 'center',
        top: '2%',
        fontSize: 20,
        width: '100%'
        },
   
        
  });