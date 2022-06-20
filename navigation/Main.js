import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../screens/Inicio'
import seleccionarUsuario from '../screens/seleccionarUsuario'

const Stack = createNativeStackNavigator()

const Main =()=>{
   
return(
        <Inicio/>

)
}
return(
        <seleccionarUsuario/>
)       

export default Main
