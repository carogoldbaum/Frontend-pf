import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import logo from "../assets/logo.png";

const LogoTexto = (props) => {

    return (
        <View>
            <Image style={styles.logo} source={logo}></Image>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginTop:'50%',}}>
         
                    <Text style={styles.titulo}>ConApp</Text>
          
                 </View>
        </View>
    )
}

export default LogoTexto


const styles = StyleSheet.create({

    logo: {
        width: '35%',
        height: '46%',
        position: 'absolute',
        top: '25%',
        left:'-19%',
        
    },
      titulo: {
        left:'80%',
        top: '-58%',
        color: 'black',
        fontSize: 48,
        
      },
});