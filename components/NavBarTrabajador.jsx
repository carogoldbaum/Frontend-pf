import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import ProfileIcon from "../assets/ProfileIcon.png";
import ChatsIcon from "../assets/ChatIcon.png";
import SearchIcon from "../assets/SearchIcon.png";
import HomeIcon from "../assets/HomeIcon.png";
import AgendaIcon from "../assets/agendaIcon.png";

const NavBarTrabajador = (props) => {

    const { onPress, text } = props

    return (
    
         <View >
              
           {/*
             <BotonHome 
                onPress={ () =>{
                navigation.navigate('')
        }}
        />  
          <BotonLupa
                onPress={ () =>{
                navigation.navigate('')
        }}
        />  
        <BotonAgenda 
                onPress={ () =>{
                navigation.navigate('')
        }}
        />  
           <BotonChats 
                onPress={ () =>{
                navigation.navigate('')
        }}
        /> 
        <BotonProfile 
                onPress={ () =>{
                navigation.navigate('')
        }}
        /> 
           */}   
      
      <Image style={styles.ButtonHome} source={HomeIcon}></Image>
      
      <Image style={styles.ButtonLupa} source={SearchIcon}></Image>
      
      <Image style={styles.ButtonAgenda} source={AgendaIcon}></Image>

      <Image style={styles.ButtonChats} source={ChatsIcon}></Image>

      <Image style={styles.BotonProfile} source={ProfileIcon}></Image>

         </View>
       
    )
}

export default NavBarTrabajador


const styles = StyleSheet.create({

ButtonAgenda: {
    width: 40,
    height: 40,
    padding: 10,
    top: '-124%',
    right: '0%',
    },
    ButtonChats: {
        width: 40,
        height: 40,
        padding: 10,
        top: '-144%',
        right: '-19%',
        },

ButtonHome: {
    width: 40,
    height: 40,
    padding: 10,
    top: '-85%',
    right: '38%',
    },
     ButtonLupa: {
    width: 40,
    height: 40,
    padding: 10,
    top: '-104%',
    right: '19%',
    },
    BotonProfile: {
        width: 40,
        height: 40,
        padding: 10,
        top: '-165%',
        right: '-38%',
        },
    

});