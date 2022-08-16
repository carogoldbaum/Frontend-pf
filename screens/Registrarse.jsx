import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Date, onChangeDate, number, TextInput, onChangeText, onChangeNumber, String, ImageBackground} from 'react-native';
import BotonSiguienteRegistrarse from "../components/BotonSiguienteRegistrarse";
import fondo from "../assets/fondo.jpg";

const Registrarse =({navigation})=>{

  const [userState, setUserState] = useState({
    email: '',
    password: '',
    password2: ''
  });
  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

    return (
      
      <View>

            <ImageBackground source={fondo} style={styles.image}>
              

            <Text style={styles.titulo}>Registrarse</Text>

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
            <TextInput   
              style={styles.dato}
              onChangeText={text => setUserState({ ...userState, password2: text })}
              value={userState.password2}
              placeholder="Repetir Contraseña"
              secureTextEntry={true}
              
            />
            {error && <Text style={styles.alerta}>Completar datos</Text>}
               
        <BotonSiguienteRegistrarse
            disable={disable}
            text="SIGUIENTE" 
            onPress={async () =>{
              setDisable(true)
              if (userState.email==''||userState.password==''||userState.password2==''){
                setError(true)
              }
                else {
                  //await PostLogIn(userState).then(() => {
                      setDisable(false)
                      navigation.navigate('SeleccionarUsuario')
                    
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
  
  export default Registrarse
  
  const styles = StyleSheet.create({
   
    titulo: {
      top: '8%',
      marginLeft:'-36%',
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
        top: '9%',
        fontSize: 20,
        width: '100%'
        },
        
        
  });