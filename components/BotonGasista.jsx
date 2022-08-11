import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import gasista from "../assets/gasista.png";

  const BotonGasista= () => {
    return (
       
          <View >
            <Image style={styles.RoundButton5} source={gasista}></Image>
        
            <Text style={styles.Texto}>Gasista</Text>

          </View>
  
    )
  }

export default BotonGasista

const styles = StyleSheet.create({


    RoundButton5: {
    width: 130,
    height: 130,
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '70%',
    right: '25%',
    },

    Texto: {
    fontWeight: 'bold',
    top: '75%',
    right: '16%',
    fontSize: 15,
    },

});