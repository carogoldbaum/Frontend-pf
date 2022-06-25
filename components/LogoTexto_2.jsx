import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, InlineImage, TouchableOpacity} from 'react-native';
import logo from "../assets/logo.png";

const LogoTexto2 = (props) => {

    return (
        <View>
            <Image style={styles.logoo} source={logo}></Image>
                 <View style={{ flexDirection: 'row', justifyContent: 'space-between',  marginTop:'60%',}}>
         
                    <Text style={styles.tituloo}>ConApp</Text>
          
                 </View>
        </View>
    )
}

export default LogoTexto2


const styles = StyleSheet.create({

    logoo: {
        width: '35%',
        height: '46%',
        position: 'absolute',
        top: '25%',
        left:'-19%',
        
    },
      tituloo: {
        left:'80%',
        top: '-58%',
        color: 'black',
        fontSize: 48,
        
      },
});