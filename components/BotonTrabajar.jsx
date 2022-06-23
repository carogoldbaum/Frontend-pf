import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import trabajar from "../assets/trabajar.png";

  const BotonTrabajar = () => {
    
    return (
      <View>
        <View style={styles.screen}>
        <TouchableOpacity>
        <Image style={styles.roundButton1} source={trabajar}></Image>
   
          <Text style={styles.subtitulo}>TRABAJAR</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
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
    top: '-172%'
    },

subtitulo: {
    fontWeight: 'bold',
    top: '-165%',
    textAlign: 'center',
    fontSize: 15,
 },

});