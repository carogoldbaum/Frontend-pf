import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BotonHome from '../components/IconoHome';

const NavBar = (props) => {

    const { onPress, text } = props

    return (
    
         <View >
              <Image style={styles.EspacioEnBlancoTrabajar}></Image>
              <BotonHome
                onPress={ () =>{
                navigation.navigate('HomeContratador')
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

});