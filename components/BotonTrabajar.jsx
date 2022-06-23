import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import trabajar from "../assets/trabajar.png";

  const BotonTrabajar = () => {
    
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.roundButton1}>
    
        <View style={{marginTop:'150%',}}></View>
        <Text style={styles.subtitulo}>TRABAJAR</Text>
        </TouchableOpacity>
    </View>
  );
}

export default BotonTrabajar

const styles = StyleSheet.create({
screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },

roundButton1: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 180,
    backgroundColor: '#F9904F',
    top: '-22%'
    },

subtitulo: {
    fontWeight: 'bold',
    }

});