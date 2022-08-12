import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import SearchIcon from "../assets/SearchIcon.png";

  const IconoLupaContratador= () => {
    return (
       
          <View >

            <Image style={styles.ButtonLupa} source={SearchIcon}></Image>

          </View>
  
    )
  }

export default IconoLupaContratador

const styles = StyleSheet.create({


    ButtonLupa: {
    width: 40,
    height: 40,
    padding: 10,
    top: '-1208%',
    right: '-35%',
    },

});