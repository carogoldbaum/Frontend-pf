import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BotonHome from '../components/IconoHome';
import BotonLupa from '../components/IconoLupa';
import BotonAgenda from '../components/IconoAgenda';
import BotonChats from '../components/IconoChats';
import BotonProfile from '../components/IconoProfile';

const NavBar = (props) => {

    const { onPress, text } = props

    return (
    
         <View >
              
              <BotonHome style={styles.Casita}
                onPress={ () =>{
                navigation.navigate('')
        }}
        />  
          <BotonLupa style={styles.Casita}
                onPress={ () =>{
                navigation.navigate('')
        }}
        />  
        <BotonAgenda style={styles.Casita}
                onPress={ () =>{
                navigation.navigate('')
        }}
        />  
           <BotonChats style={styles.Casita}
                onPress={ () =>{
                navigation.navigate('')
        }}
        /> 
        <BotonProfile style={styles.Casita}
                onPress={ () =>{
                navigation.navigate('')
        }}
        /> 
         </View>
       
    )
}

export default NavBar


const styles = StyleSheet.create({

    EspacioEnBlancoTrabajar: {
        left: '-2%',
        backgroundColor: "rgba(52, 52, 52, 0.0)",
        width: 430,
        height: 80,
        marginTop:'-109.5%',
        borderWidth:3,
        borderColor: 'black',

    },

    Casita:{
        marginBottom:'90%',
        marginTop:'-120%',
        marginLeft:'-10%',
    }

});