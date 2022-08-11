import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import pintor from "../assets/pintor.png";

  const BotonPintor= () => {
    return (
       
          <View >
            <Image style={styles.RoundButton4} source={pintor}></Image>
        
            <Text style={styles.Texto}>Pintor</Text>

          </View>
  
    )
  }

export default BotonPintor

const styles = StyleSheet.create({


    RoundButton4: {
    width: 130,
    height: 130,
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '59.5%',
    right: '-10%',
    },

    Texto: {
    fontWeight: 'bold',
    top: '61.5%',
    right: '-20%',
    fontSize: 15,
    },

});