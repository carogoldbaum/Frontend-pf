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
import BotonTransProfesor from "../components/BotonTransProfesor"
import BotonTransPintor from "../components/BotonTransPintor"
import BotonTransPlomero from "../components/BotonTransPlomero"
import BotonTransGasista from "../components/BotonTransGasista"
import BotonTransElectricista from "../components/BotonTransElectricista"
import BotonTransNiñera from "../components/BotonTransNiñera"
import BotonTransAlbañil from "../components/BotonTransAlbañil"
import BotonTransLimpieza from "../components/BotonTransLimpieza"

const HomeContratador = ({ navigation }) => {

    return (
        <View>

            <Text style={styles.titulo}>Rubros</Text>
            <View style={{ borderBottomColor: 'black', borderWidth: 0.7, width: '100%', marginBottom: '10%', marginTop: '-10%', top: '56%', }}></View>

            <BotonPlomero
                text="Plomero"
            />
            <BotonTransPlomero
                onPress={() => {
                    navigation.navigate('ListaTrabajadores')
                }}
            />

            <BotonPintor
                text="Pintor"
            />
            <BotonTransPintor
                onPress={() => {
                    navigation.navigate('ListaTrabajadores')
                }}
            />

            <BotonGasista
                text="Gasista"
            />


            <BotonElectricista
                text="Electricista"
            />

            <BotonNiñera
                text="Niñera"
            />


            <BotonAlbañil
                text="Albañil"
            />


            <BotonLimpieza
                text="Limpieza"
            />


            <BotonProfesor
                text="Profesor"
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