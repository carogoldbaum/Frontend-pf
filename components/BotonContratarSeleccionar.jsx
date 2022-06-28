import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import contratar from "../assets/contratar.png";

  const BotonContratarSeleccionar = () => {
    return (
       
          <View >
            <Image style={styles.RoundButton2} source={contratar}></Image>
        
            <Text style={styles.TextoContratar}>CONTRATAR</Text>

          </View>
  
    )
  }

export default BotonContratarSeleccionar

const styles = StyleSheet.create({


    RoundButton2: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '-54%'
    },

    TextoContratar: {
    fontWeight: 'bold',
    top: '-50%',
    textAlign: 'center',
    fontSize: 15,
    },

});