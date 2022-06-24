import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../screens/Inicio'
import SeleccionarUsuario from '../screens/SeleccionarUsuario'
import Registrarse from '../screens/Registrarse';

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
        name="Registrarse" 
        component={Registrarse} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main