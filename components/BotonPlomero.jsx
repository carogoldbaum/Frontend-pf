import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import plomero from "../assets/plomero.png";

  const BotonPlomero= () => {
    return (
       
          <View >
            <Image style={styles.RoundButton3} source={plomero}></Image>
        
            <Text style={styles.Texto}>Plomero</Text>

          </View>
  
    )
  }

export default BotonPlomero

const styles = StyleSheet.create({


    RoundButton3: {
    width: 130,
    height: 130,
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '45%',
    right: '25%',
    },

    Texto: {
    fontWeight: 'bold',
    top: '50%',
    right: '17%',
    fontSize: 15,
    },

});