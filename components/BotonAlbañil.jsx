import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import albañil from "../assets/albañil.png";

  const BotonAlbañil= () => {
    return (
       
          <View >
            <Image style={styles.RoundButton8} source={albañil}></Image>
        
            <Text style={styles.Texto}>Albañil</Text>

          </View>
  
    )
  }

export default BotonAlbañil

const styles = StyleSheet.create({


    RoundButton8: {
    width: 130,
    height: 130,
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '-340%',
    left: '25%',
    },

    Texto: {
    fontWeight: 'bold',
    top: '-335%',
    left: '35%',
    fontSize: 15,
    },

});