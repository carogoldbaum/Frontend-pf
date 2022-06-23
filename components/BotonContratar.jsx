import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import contratar from "../assets/contratar.png";


  const BotonContratar = () => {
    
  return (
    <View>
      <View style={styles.screen}>
      <TouchableOpacity>
      <Image style={styles.roundButton2} source={contratar}></Image>
        <Text style={styles.subtituloo}>CONTRATAR</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
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
    top: '-450%'
  },

  subtituloo: {
     fontWeight: 'bold',
     top: '-444%',
     textAlign: 'center',
     fontSize: 15,

  },

});