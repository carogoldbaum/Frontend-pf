import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import profesor from "../assets/profesor.png";

  const BotonProfesor= () => {
    return (
       
          <View >
            <Image style={styles.RoundButton10} source={profesor}></Image>
        
            <Text style={styles.Texto}>Profesor</Text>

          </View>
  
    )
  }

export default BotonProfesor

const styles = StyleSheet.create({


    RoundButton10: {
    width: 130,
    height: 130,
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '-320%',
    left: '25%',
    },

    Texto: {
    fontWeight: 'bold',
    top: '-315%',
    left: '33%',
    fontSize: 15,
    },

});