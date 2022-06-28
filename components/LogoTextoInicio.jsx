import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import logo from "../assets/logo.png";

const LogoTextoInicio = (props) => {

    return (
        <View>
            <Image style={styles.logoInicio} source={logo}></Image>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginTop:'60%',}}>
         
                    <Text style={styles.tituloInicio}>ConApp</Text>
          
                 </View>
        </View>
    )
}

export default LogoTextoInicio


const styles = StyleSheet.create({

    logoInicio: {
        width: '35%',
        height: '46%',
        position: 'absolute',
        top: '25%',
        left:'-19%',
        
    },
      tituloInicio: {
        left:'80%',
        top: '-58%',
        color: 'black',
        fontSize: 48,
        
      },
});