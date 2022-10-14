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
import ListaTrabajadores from "../screens/ListaTrabajadores"
import ContratarTrabajadores from "../screens/ContratarTrabajadores"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image, StyleSheet} from "react-native";
import ChatsIcon from "../assets/ChatIcon.png";
import HomeIcon from "../assets/HomeIcon.png";
import SearchIcon from "../assets/SearchIcon.png";
import ProfileIcon from "../assets/ProfileIcon.png";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
    }}
      initialRouteName="Inicio"
      >
          <Stack.Screen name="Tabs" component= {MyTabs} options={{headerShown: false}}/>
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
        name="HomeTrabajador"
        component={HomeTrabajador}
        />
            <Stack.Screen
        name="HomeContratador"
        component={MyTabs}
        />
         <Stack.Screen
        name="ListaTrabajadores"
        component={ListaTrabajadores}
        />
           <Stack.Screen
        name="ContratarTrabajadores"
        component={ContratarTrabajadores}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function MyTabs (){
   return (
       <Tab.Navigator
           initialRouteName="HomeContratador"
           screenOptions={{
               tabBarActiveTintColor: 'white',
               tabBarInactiveTintColor: '#4d4d4d',
               tabBarStyle: {
                   backgroundColor: '#d1cfcf',
                   borderTopColor: 'transparent',
               },
           }}
       >
           <Tab.Screen
               name="HomeContratador"
               component={HomeContratador}
               options={{
                   tabBarLabel: 'HomeContratador',
                   headerShown: false,
                   tabBarIcon: ({ color, size }) => (
                       <Image style={styles.ButtonChats} source={ChatsIcon} />
                   ),
               }}
           />
           <Tab.Screen
               name="Tab2"
               component={HomeContratador}
               options={{
                   tabBarLabel: 'Tab2',
                   headerShown: false,
                   tabBarIcon: ({ color, size }) => (
                       <Image style={styles.ButtonChats} source={HomeIcon} />
                   ),
               }}
           />
           <Tab.Screen
               name="Tab3"
               component={HomeContratador}
               options={{
                   tabBarLabel: 'Tab2',
                   headerShown: false,
                   tabBarIcon: ({ color, size }) => (
                       <Image style={styles.ButtonChats} source={SearchIcon} />
                   ),
               }}
           />
           <Tab.Screen
               name="Tab4"
               component={HomeContratador}
               options={{
                   tabBarLabel: 'Tab2',
                   headerShown: false,
                   tabBarIcon: ({ color, size }) => (
                       <Image style={styles.ButtonChats} source={ProfileIcon} />
                   ),
               }}
           />
       </Tab.Navigator>
   );
}

const styles = StyleSheet.create({

    ButtonChats: {
        width: 40,
        height: 40,
        padding: 10,
    },
});

export default Main
