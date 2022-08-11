import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import fondo from "../assets/fondo.jpg";
import { useNavigation } from '@react-navigation/native';
import BotonPlomero from '../components/BotonPlomero';
import BotonPintor from "../components/BotonPintor";
import BotonGasista from '../components/BotonGasista';
import BotonElectricista from '../components/BotonElectricista';
import BotonNiñera from '../components/BotonNiñera';
import BotonAlbañil from '../components/BotonAlbañil';
import BotonLimpieza from '../components/BotonLimpieza';
import BotonProfesor from '../components/BotonProfesor';
import NavBar from '../components/NavBar';

const HomeContratador =({navigation})=>{

    return (
        <View>
           
            <Text style={styles.titulo}>Rubros</Text>

            <BotonPlomero style={{ fontSize: 48}}
            text="Plomero" 
            onPress={ () =>{
            navigation.navigate('HomeContratador')
        }}
        />
            <BotonPintor style={{ fontSize: 48}}
            text="Pintor" 
            onPress={ () =>{
            navigation.navigate('HomeContratador')
        }}
        />
            <BotonGasista style={{ fontSize: 48}}
            text="Gasista" 
            onPress={ () =>{
            navigation.navigate('HomeContratador')
        }}
        />
            <BotonElectricista style={{ fontSize: 48}}
            text="Electricista" 
            onPress={ () =>{
            navigation.navigate('HomeContratador')
        }}
        />
            <BotonNiñera style={{ fontSize: 48}}
            text="Niñera" 
            onPress={ () =>{
            navigation.navigate('HomeContratador')
        }}
        />
            <BotonAlbañil style={{ fontSize: 48}}
            text="Albañil" 
            onPress={ () =>{
            navigation.navigate('HomeContratador')
        }}
        />
        <BotonLimpieza style={{ fontSize: 48}}
            text="Limpieza" 
            onPress={ () =>{
            navigation.navigate('HomeContratador')
        }}
        />
            <BotonProfesor style={{ fontSize: 48}}
            text="Profesor" 
            onPress={ () =>{
            navigation.navigate('HomeContratador')
        }}
        />
            <NavBar/>

         
        </View>
    );
        
}

export default HomeContratador

const styles = StyleSheet.create({

    image: {
      height:'100%',
      width: '100%',
      alignItems: 'center',
      
    },

    titulo: {
        top: '4.5%',
        fontSize: 34,
        left: '35%',
        alignItems: 'center'
  
        },
      
  });