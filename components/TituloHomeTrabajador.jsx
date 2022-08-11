import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import logo from "../assets/logo.png";

const TituloHomeTrabajador = () => {

    return (
        <View>
                   <View><Text style={styles.tituloSeleccionar} >Home</Text>
          </View> 
                 
        </View>
    )
}

export default TituloHomeTrabajador


const styles = StyleSheet.create({

    logoSeleccionar: {
        width: '35%',
        height: '46%',
        position: 'absolute',
        top: '26%',
        left:'-19%',
        
    },
    tituloSeleccionar: {
        color: 'black',
        fontSize: 48,
        marginTop:'20%',
        
      },
});