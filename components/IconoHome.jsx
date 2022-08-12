import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import HomeIcon from "../assets/HomeIcon.png";

  const BotonHome= () => {
    return (
       
          <View >

            <Image style={styles.ButtonHome} source={HomeIcon}></Image>

          </View>
  
    )
  }

export default BotonHome

const styles = StyleSheet.create({


    ButtonHome: {
    width: 40,
    height: 40,
    padding: 10,
    top: '-450%',
    right: '350%',
    },

});