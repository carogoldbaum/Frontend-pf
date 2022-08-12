import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import trabajar from "../assets/trabajar.png";

  const BotonTrabajarSeleccionar = () => {
    return (
       
          <View >
            <Image style={styles.roundButton1} source={trabajar}></Image>
        
            <Text style={styles.TextoTrabajar}>SOLICITUDES DE TRABAJO</Text>

          </View>
  
    )
  }

export default BotonTrabajarSeleccionar

const styles = StyleSheet.create({


    roundButton1: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '20%'
    },

    TextoTrabajar: {
    fontWeight: 'bold',
    top: '22%',
    textAlign: 'center',
    fontSize: 15,
    },

});