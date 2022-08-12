import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import BotonTrabajosPendientes from "../components/BotonTrabajosPendientesHomeTrabajador";
import EspacioTransSolicitdesDeTrabajar from "../components/EspacioTransSolicitudesDeTrabajo";
import EspacioTransTrabajosPendientes from "../components/EspacioTransTrabajosPendientes";
import BotonSolicitudesDeTrabajoHomeTrabajador from '../components/BotonSolicitudesDeTrabajoHomeTrabajador';
import { useNavigation } from '@react-navigation/native';
import TituloHomeTrabajador from "../components/TituloHomeTrabajador";

import NavBarTrabajador from '../components/NavBarTrabajador';

const HomeTrabajador =({navigation})=>{


    return(
        <View style={styles.diseño}>

            <TituloHomeTrabajador/>
            <View style={{borderBottomColor: 'black', borderWidth: 0.7, width:'100%', marginBottom:'10%', marginTop:'-10%',}}></View>
            <View style={{borderBottomColor: 'black', borderWidth: 0.7, width:'100%', marginBottom:'10%', marginTop:'-10%', top: '58%',}}></View>

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

            <NavBarTrabajador/>
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
   
    color: 'black',
    fontSize: 48,
    marginTop:'20%',
    
  },
    
});