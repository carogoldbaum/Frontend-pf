import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import IconoHomeContratador from './IconoHomeContratador';
import IconoLupaContratador from './IconoLupaContratador';

import IconoChatsContratador from './IconoChatsContratador';
import IconoProfileContratador from './IconoProfileContratador';

const NavBarContratador = (props) => {

    const { onPress, text } = props

    return (
    
         <View >
              
              
        <IconoHomeContratador 
                onPress={ () =>{
                navigation.navigate('')
        }}
        />  
          <IconoLupaContratador
                onPress={ () =>{
                navigation.navigate('')
        }}
        />  
        <IconoChatsContratador 
                onPress={ () =>{
                navigation.navigate('')
        }}
        /> 
        <IconoProfileContratador 
                onPress={ () =>{
                navigation.navigate('')
        }}
        /> 

         </View>
       
    )
}

export default NavBarContratador


const styles = StyleSheet.create({


});