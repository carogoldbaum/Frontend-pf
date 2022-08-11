import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import niñera from "../assets/niñera.png";

  const BotonNiñera= () => {
    return (
       
          <View >
            <Image style={styles.RoundButton7} source={niñera}></Image>
        
            <Text style={styles.Texto}>Niñera</Text>

          </View>
  
    )
  }

export default BotonNiñera

const styles = StyleSheet.create({


    RoundButton7: {
    width: 130,
    height: 130,
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '-350%',
    left: '25%',
    },

    Texto: {
    fontWeight: 'bold',
    top: '-345%',
    left: '35%',
    fontSize: 15,
    },

});