import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, backgroundColor } from 'react-native';
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
import NavBarContratador from '../components/NavBarContratador';
import BotonRubro from "../components/BotonRubro"

import {getRubro} from "../axios/axiosClient"

const [rubro, setRubro] = useState([])

const HomeContratador = ({ navigation }) => {

    //useEffect(async () => {
      //  const rta = await getRubro();
       // setRubro(rta.data);
       // console.log("sdflksdjngfsangñdikdilgfhdudbfnidkf", rta.data)
      //}, [])
    
    return (
        <View>

            <Text style={styles.titulo}>Rubros</Text>
            <View style={{ borderBottomColor: 'black', borderWidth: 0.7, width: '100%', marginBottom: '10%', marginTop: '-10%', top: '56%', }}></View>

            <BotonRubro
                text={rubro.Nombre}
                image={rubro.Imagen}
                onPress={() => {
                    navigation.navigate('ListaTrabajadores')
                }}
            />
          
            <NavBarContratador />
        </View>
    );
}
export default HomeContratador

const styles = StyleSheet.create({

    titulo: {
        top: '4.5%',
        fontSize: 34,
        left: '35%',
        alignItems: 'center'

    },
});