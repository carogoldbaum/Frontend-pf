import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import electricista from "../assets/electricista.png";

  const BotonElectricista= () => {
    return (
       
          <View >
            <Image style={styles.RoundButton6} source={electricista}></Image>
        
            <Text style={styles.Texto}>Electricista</Text>

          </View>
  
    )
  }

export default BotonElectricista

const styles = StyleSheet.create({


    RoundButton6: {
    width: 130,
    height: 130,
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '80.5%',
    right: '-10%',
    },

    Texto: {
    fontWeight: 'bold',
    top: '82.5%',
    right: '-16%',
    fontSize: 15,
    },

});