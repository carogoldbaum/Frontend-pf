import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import SearchIcon from "../assets/SearchIcon.png";

  const BotonLupa= () => {
    return (
       
          <View >

            <Image style={styles.ButtonLupa} source={SearchIcon}></Image>

          </View>
  
    )
  }

export default BotonLupa

const styles = StyleSheet.create({


    ButtonLupa: {
    width: 40,
    height: 40,
    padding: 10,
    top: '-980%',
    right: '170%',
    },

});