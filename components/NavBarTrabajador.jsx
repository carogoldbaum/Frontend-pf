import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BotonHome from './IconoHome';
import BotonLupa from './IconoLupa';
import BotonAgenda from './IconoAgenda';
import BotonChats from './IconoChats';
import BotonProfile from './IconoProfile';

const NavBarTrabajador = (props) => {

    const { onPress, text } = props

    return (
    
         <View >
              
              
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

         </View>
       
    )
}

export default NavBarTrabajador


const styles = StyleSheet.create({


});