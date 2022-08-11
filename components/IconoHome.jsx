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
    width: 90,
    height: 90,
    padding: 10,
    top: '300%',
    right: '-90%',
    },

});