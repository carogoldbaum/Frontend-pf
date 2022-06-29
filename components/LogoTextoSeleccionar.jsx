import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import logo from "../assets/logo.png";

const LogoTextoSeleccionar = () => {

    return (
        <View>
            <Image style={styles.logoSeleccionar} source={logo}></Image>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginTop:'50%',}}>
         
                    <Text style={styles.tituloSeleccionar}>ConApp</Text>
          
                 </View>
        </View>
    )
}

export default LogoTextoSeleccionar


const styles = StyleSheet.create({

    logoSeleccionar: {
        width: '35%',
        height: '46%',
        position: 'absolute',
        top: '26%',
        left:'-19%',
        
    },
    tituloSeleccionar: {
        left:'80%',
        top: '-63%',
        color: 'black',
        fontSize: 48,
        
      },
});