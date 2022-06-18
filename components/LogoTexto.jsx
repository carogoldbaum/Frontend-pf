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
        width: '33%',
        height: '44%',
        position: 'absolute',
        top: '75%',
        left:'-18%',
        
    },
      titulo: {
        left:'80%',
        
        top: '15%',
        color: 'black',
        fontSize: 48
        
      },
});