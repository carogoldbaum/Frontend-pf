import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import pendiente from "../assets/TrabajosPendientes.png";

  const BotonTrabajosPendientes = () => {
    return (
       
          <View >
            <Image style={styles.roundButton1} source={pendiente}></Image>
        
            <Text style={styles.TextoTrabajar}>TRABAJOS PENDIENTES</Text>

          </View>
  
    )
  }

export default BotonTrabajosPendientes

const styles = StyleSheet.create({


    roundButton1: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '-40%'
    },

    TextoTrabajar: {
    fontWeight: 'bold',
    top: '-38%',
    textAlign: 'center',
    fontSize: 15,
    },

});