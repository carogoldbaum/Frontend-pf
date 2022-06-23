import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import contratar from "../assets/contratar.png";


  const BotonContratar = () => {
    
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.roundButton2}>

        <View style={{marginTop:'150%',}}></View>
        <Text style={styles.subtitulo}>CONTRATAR</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BotonContratar;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  roundButton2: {
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
  },

});