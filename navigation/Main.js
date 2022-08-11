import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../screens/Inicio'
import SeleccionarUsuario from '../screens/SeleccionarUsuario'
import RegistrarseTrabajador from '../screens/RegistrarseTrabajador';
import Registrarse from '../screens/Registrarse';
import IniciarSesion from "../screens/IniciarSesion";
import RestablecerContraseña from "../screens/RestablecerContraseña";
import SeleccionarComoIngresar from "../screens/SeleccionarComoIngresar";
import RegistrarseContratador from "../screens/RegistrarseContratador";
import HomeContratador from "../screens/HomeContratador";
import HomeTrabajador from "../screens/HomeTrabajador"

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
    }
    }>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
        />
        <Stack.Screen 
        name="SeleccionarUsuario" 
        component={SeleccionarUsuario} 
        />
         <Stack.Screen 
        name="RegistrarseTrabajador" 
        component={RegistrarseTrabajador} 
        />
         <Stack.Screen 
        name="Registrarse" 
        component={Registrarse} 
        />
           <Stack.Screen 
        name="IniciarSesion" 
        component={IniciarSesion} 
        />
         <Stack.Screen 
        name="RestablecerContraseña" 
        component={RestablecerContraseña} 
        />
        <Stack.Screen 
        name="SeleccionarComoIngresar" 
        component={SeleccionarComoIngresar} 
        />
         <Stack.Screen 
        name="RegistrarseContratador" 
        component={RegistrarseContratador} 
        />
          <Stack.Screen 
        name="HomeContratador" 
        component={HomeContratador}
        />
        <Stack.Screen 
        name="HomeTrabajador" 
        component={HomeTrabajador} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main