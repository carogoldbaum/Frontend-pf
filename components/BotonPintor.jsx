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
    top: '60%',
    right: '25%',
    },

    Texto: {
    fontWeight: 'bold',
    top: '65%',
    right: '15%',
    fontSize: 15,
    },

});