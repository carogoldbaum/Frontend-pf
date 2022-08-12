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
              
              <Image style={styles.ButtonChats} source={ChatsIcon}></Image>

              <Image style={styles.ButtonHome} source={HomeIcon}></Image>

              <Image style={styles.ButtonLupa} source={SearchIcon}></Image>

              <Image style={styles.BotonProfile} source={ProfileIcon}></Image>
        

         </View>
       
    )
}

export default NavBarContratador


const styles = StyleSheet.create({

        ButtonChats: {
                width: 40,
                height: 40,
                padding: 10,
                top: '-1310%',
                right: '-58%',
                },
                ButtonHome: {
                        width: 40,
                        height: 40,
                        padding: 10,
                        top: '-1108%',
                        right: '-12%',
                        
                        },
                        ButtonLupa: {
                                width: 40,
                                height: 40,
                                padding: 10,
                                top: '-1208%',
                                right: '-35%',
                                },
                                BotonProfile: {
                                        width: 40,
                                        height: 40,
                                        padding: 10,
                                        top: '-1410%',
                                        right: '-78%',
                                        },

});