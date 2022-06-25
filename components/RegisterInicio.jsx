import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const RegisterInicio = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.button2}
            onPress={onPress}
        >
            <Text style={styles.button2Text}>
                {text}
            </Text>
        
        </TouchableOpacity>
       
    )
}

export default RegisterInicio


const styles = StyleSheet.create({

    button2Text: {
        color: 'white',
        textAlign: 'center',
     
        fontSize: 18,
        width: '100%'
    },
    button2: {
        backgroundColor: 'black',
        borderRadius: 70,
        padding: 15,
        marginTop:'5%',
        width: '47%'
    },

});