import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Date, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground } from 'react-native';
import SiguientBotonSiguienteRegistrarseeRegistrarse from "../components/BotonSiguienteRegistrarse";
import fondo from "../assets/fondo.jpg";
import BotonSiguienteRegistrarse from "../components/BotonSiguienteRegistrarse";
import { postRestablecer } from '../axios/axiosClient';
import { getMailDiferente } from '../axios/axiosClient';

const RestablecerContraseña = ({ navigation }) => {
  const [userState, setUserState] = useState({
    email: '',
    password2: '',
    password3: ''
  });
  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

  return (

    <View>

      <ImageBackground source={fondo} style={styles.image}>

        <Text style={styles.titulo}>Restablecer</Text>
        <Text style={styles.titulo}>Contraseña</Text>

        <TextInput
          style={styles.dato}
          onChangeText={text => setUserState({ ...userState, email: text })}
          value={userState.email}
          placeholder="Correo electronico"

        />
        <TextInput
          style={styles.dato}
          onChangeText={text => setUserState({ ...userState, password2: text })}
          value={userState.password2}
          placeholder="Nueva Contraseña"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.dato}
          onChangeText={text => setUserState({ ...userState, password3: text })}
          value={userState.password3}
          placeholder="Confirmar Contraseña"
          secureTextEntry={true}

        />

        {error && <Text style={styles.alerta}>Completar datos</Text>}

        <BotonSiguienteRegistrarse
          text="SIGUIENTE"
          onPress={async () => {
            setDisable(true)

            if (userState.email == '' || userState.password2 == '' || userState.password3 == '') { //si hay datos incompletos
              setError(true)
              console.error("boton errrorrrrrr", err)

            } else if (userState.password2 === userState.password3) {//si datos completos
              try {
              console.log('se mando bien por qué no se fue al catch con un error')
              await postRestablecer(userState)

              setDisable(true)
              setError(false)
              navigation.navigate('IniciarSesion')

              }catch(err){
                  setError(true)
                  console.error("todo bien 7", err)
                  setDisable(false)
                };
            }
            setDisable(false)
          }
          }
        />
      </ImageBackground>
    </View>
  );
}

export default RestablecerContraseña

const styles = StyleSheet.create({

  titulo: {
    top: '8%',
    marginLeft: '-35%',
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
    top: '9%',
    fontSize: 20,
    width: '100%'
  },

});