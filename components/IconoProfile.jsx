import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ProfileIcon from "../assets/ProfileIcon.png";

  const BotonProfile= () => {
    return (
       
          <View >

            <Image style={styles.BotonProfile} source={ProfileIcon}></Image>

          </View>
  
    )
  }

export default BotonProfile

const styles = StyleSheet.create({


    BotonProfile: {
    width: 40,
    height: 40,
    padding: 10,
    top: '-845%',
    right: '-350%',
    },

});