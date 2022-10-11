import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Date, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground } from 'react-native';
import BotonIniciarSesion from "../components/BotonIniciarSesion";
import fondo from "../assets/fondo.jpg";
import OlvideContraseña from "../components/OlvideContraseña"
import { postIniciarSesion } from '../axios/axiosClient';

const IniciarSesion = ({ navigation }) => {

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
          onPress={() => {
            navigation.navigate('RestablecerContraseña')
          }}
        />


        {error && <Text style={styles.alerta}>Error</Text>}

        <BotonIniciarSesion
          text="INGRESAR"
          onPress={async () => {
            setDisable(true)
           console.log("todo bien 1")
            if (userState.email == '' || userState.password == '') { //si hay datos incompletos
              setError(true)
              console.log("todo bien 2")
            }
            else if (userState.email != '' || userState.password != '') { //si datos completos
              console.log("muestro user data", userState)
          
              await postIniciarSesion(userState).then((data) => {
                console.log("muestro response data", data.data)
                if (data.data === true){ //si la informacion etsa bien
                  console.log("todo bien 4")
                  setError(false)
                setDisable(true)

                navigation.navigate('SeleccionarComoIngresar')

               } else { //si la informacion no etsa bien
                setError(true) 
                console.log(data.data)
                console.log("todo bien 5")
               }
               if (data != true &&  (userState.email == '' || userState.password == '') ) { //si la informacion no etsa bien y hay datos incompletos
                setError(true)
                console.log("todo bien 6")
               }
             
              })
                .catch((err) => {
                  console.error("todo bien 7", err)
                  setDisable(false)
                });

            } setDisable(false)
            console.log("todo bien 8")
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
    marginLeft: '-28%',
    fontSize: 34,

  },

  dato: {
    fontSize: 18,
    marginTop: '5%',
    marginLeft: '0%',
    width: '80%',
    alignItems: 'center',
    borderWidth: 2,
    padding: '3%',
    top: '8%',
    backgroundColor: '#F4F4F4',

  },

  image: {
    height: '100%',
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
