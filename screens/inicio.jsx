import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import logo from "../assets/logo.png";
import fondo from "../assets/fondo.jpg";
import Boton from "../components/Boton";
import { useNavigation } from '@react-navigation/native';

 
const Inicio =({navigation})=>{
  
  return (
    
    <View>
      <ImageBackground source={fondo} style={styles.image}>
      <Image style={styles.logo} source={logo}></Image>
      <Text style={styles.titulo}>ConApp</Text>
      
      <Boton
      text="Iniciar sesion" 
      onPress={ () =>{
        navigation.navigate('IniciarSesion')
      }}
      />
     <Boton 
      text="Registrarse" 
      onPress={ () =>{
        navigation.navigate('Registrarse')
      }}
      />
   
      </ImageBackground>
    </View>
    
  );
}

export default Inicio

const styles = StyleSheet.create({
  logo: {
    width: '40%',
    height: '25%',
    position: 'absolute',
    top: '20%',
    left:'15%'
},
  image: {
    height:'100%',
    alignItems: 'center',
  },
  titulo: {
    position: 'absolute',
    top: '45%',
    color: 'blue',
    fontSize: 20,
    alignItems: 'right',
  },
});

