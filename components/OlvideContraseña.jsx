import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';

const OlvideContraseña = (props) => {

    const { onPress, text } = props

    return (
       
             <TouchableOpacity
             style={styles.titulo}
             onPress={onPress}
             >

             <Text style={styles.titulo}>Olvide mi contrseña</Text>
            
            </TouchableOpacity>
     
    )
}

export default OlvideContraseña


const styles = StyleSheet.create({
    titulo: {
        marginLeft:'11%',
        marginRight:'10%',
        fontSize: 17,
        marginTop:'11%',
        },
});