import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import IconoHomeContratador from './IconoHomeContratador';
import IconoLupaContratador from './IconoLupaContratador';

import IconoChatsContratador from './IconoChatsContratador';
import IconoProfileContratador from './IconoProfileContratador';

import ChatsIcon from "../assets/ChatIcon.png";
import HomeIcon from "../assets/HomeIcon.png";
import SearchIcon from "../assets/SearchIcon.png";
import ProfileIcon from "../assets/ProfileIcon.png";

const NavBarContratador = (props) => {

    const { onPress, text } = props

    return (
    
         <View >
              
              {/* 
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
              */ }
              
        

         </View>
       
    )
}

export default NavBarContratador


const styles = StyleSheet.create({


});