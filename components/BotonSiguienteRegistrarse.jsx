import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonSiguienteRegistrarse = (props) => {

    const { onPress, text, disable } = props

    return (
    
        <TouchableOpacity
        disabled={disable}
            style={styles.button3}
            onPress={onPress}
    
        >
            <Text style={styles.button3Text}>
                {text}
            </Text>

        </TouchableOpacity>

    )
}

export default BotonSiguienteRegistrarse


const styles = StyleSheet.create({

    button3Text: {
        color: 'white',
        textAlign: 'center',
     
        fontSize: 18,
        width: '100%'
    },
    button3: {
        backgroundColor: 'black',
        borderRadius: 70,
        padding: 15,
        marginLeft:'0%',
        width: '80%',
        top: '10%',
    },

});