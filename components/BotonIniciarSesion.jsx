import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonIniciarSesion = (props) => {

    const { onPress, text, disable} = props

    return (
    
        <TouchableOpacity
            disabled={disable}
            style={styles.button4}
            onPress={onPress}
    
        >
            <Text style={styles.button4Text}>
                {text}
            </Text>

        </TouchableOpacity>

    )
}

export default BotonIniciarSesion


const styles = StyleSheet.create({

    button4Text: {
        color: 'white',
        textAlign: 'center',
     
        fontSize: 18,
        width: '100%'
    },
    button4: {
        backgroundColor: 'black',
        borderRadius: 70,
        padding: 15,
        marginLeft:'0%',
        width: '80%',
        top: '3%',
    },

});