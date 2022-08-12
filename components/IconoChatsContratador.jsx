import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ChatsIcon from "../assets/ChatIcon.png";

  const IconoChatsContratador= () => {
    return (
       
          <View >

            <Image style={styles.ButtonChats} source={ChatsIcon}></Image>

          </View>
  
    )
  }

export default IconoChatsContratador

const styles = StyleSheet.create({


    ButtonChats: {
    width: 40,
    height: 40,
    padding: 10,
    top: '-1310%',
    right: '-58%',
    },

});