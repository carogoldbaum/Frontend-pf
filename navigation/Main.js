import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../screens/Inicio'
import SeleccionarUsuario from '../screens/SeleccionarUsuario'
import RegistrarseTrabajador from '../screens/RegistrarseTrabajador';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main