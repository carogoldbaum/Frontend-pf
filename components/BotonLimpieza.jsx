import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import limpieza from "../assets/limpieza.png";

  const BotonLimpieza= () => {
    return (
       
          <View >
            <Image style={styles.RoundButton9} source={limpieza}></Image>
        
            <Text style={styles.Texto}>Limpieza</Text>

          </View>
  
    )
  }

export default BotonLimpieza

const styles = StyleSheet.create({


    RoundButton9: {
    width: 130,
    height: 130,
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '-330%',
    left: '58%',
    },

    Texto: {
    fontWeight: 'bold',
    top: '-328%',
    left: '65.5%',
    fontSize: 15,
    },

});