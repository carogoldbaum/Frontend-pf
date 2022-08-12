import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import BotonTrabajosPendientes from "../components/BotonTrabajosPendientesHomeTrabajador";
import EspacioTransSolicitdesDeTrabajar from "../components/EspacioTransSolicitudesDeTrabajo";
import EspacioTransTrabajosPendientes from "../components/EspacioTransTrabajosPendientes";
import BotonSolicitudesDeTrabajoHomeTrabajador from '../components/BotonSolicitudesDeTrabajoHomeTrabajador';
import { useNavigation } from '@react-navigation/native';
import TituloHomeTrabajador from "../components/TituloHomeTrabajador";

import NavBar from '../components/NavBar';

const HomeTrabajador =({navigation})=>{


    return(
        <View style={styles.diseño}>

            <TituloHomeTrabajador/>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, width:'100%', marginBottom:'10%', marginTop:'-10%',}}></View>

            <BotonSolicitudesDeTrabajoHomeTrabajador/>

            <EspacioTransSolicitdesDeTrabajar
                onPress={ () =>{
                navigation.navigate('Inicio')
                }}
                
            />

            <BotonTrabajosPendientes/>

            <EspacioTransTrabajosPendientes 
                onPress={ () =>{
                navigation.navigate('Inicio')
                }}
                
            />
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, width:'100%', marginBottom:'90%', marginTop:'-40%',}}></View>
            <NavBar></NavBar>
        </View>
    );
}


export default HomeTrabajador

const styles = StyleSheet.create({

  diseño: {
    alignItems: 'center',
    
  },
  tituloHome: {
    left:'80%',
    top: '-10%',
    color: 'black',
    fontSize: 48,
    marginTop:'20%',
    
  },
    
});