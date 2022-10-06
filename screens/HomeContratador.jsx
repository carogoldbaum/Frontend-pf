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

const HomeContratador = ({ navigation }) => {

    return (
        <View>

            <Text style={styles.titulo}>Rubros</Text>
            <View style={{ borderBottomColor: 'black', borderWidth: 0.7, width: '100%', marginBottom: '10%', marginTop: '-10%', top: '56%', }}></View>
            <BotonPlomero
                text="Plomero"
                onPress={() => {
                    navigation.navigate('ListaTrabajadores')
                }}
            />
            <BotonPintor
                text="Pintor"
                onPress={() => {
                    navigation.navigate('ListaTrabajadores')
                }}
            />
            <BotonGasista
                text="Gasista"
                onPress={() => {
                    navigation.navigate('ListaTrabajadores')
                }}
            />
            <BotonElectricista
                text="Electricista"
                onPress={() => {
                    navigation.navigate('ListaTrabajadores')
                }}
            />
            <BotonNiñera
                text="Niñera"
                onPress={() => {
                    navigation.navigate('ListaTrabajadores')
                }}
            />
            <BotonAlbañil
                text="Albañil"
                onPress={() => {
                    navigation.navigate('ListaTrabajadores')
                }}
            />
            <BotonLimpieza
                text="Limpieza"
                onPress={() => {
                    navigation.navigate('ListaTrabajadores')
                }}
            />
            <BotonProfesor
                text="Profesor"
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