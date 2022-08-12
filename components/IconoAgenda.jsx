import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AgendaIcon from "../assets/agendaIcon.png";

  const BotonAgenda= () => {
    return (
       
          <View >

            <Image style={styles.ButtonAgenda} source={AgendaIcon}></Image>

          </View>
  
    )
  }

export default BotonAgenda

const styles = StyleSheet.create({


    ButtonAgenda: {
    width: 40,
    height: 40,
    padding: 10,
    top: '-639%',
    right: '0%',
    },

});