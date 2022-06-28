import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const RegistrarseInicio = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.RegistrarseInicio}
            onPress={onPress}
        >
            <Text style={styles.RegistrarseInicioText}>
                {text}
            </Text>
        
        </TouchableOpacity>
       
    )
}

export default RegistrarseInicio


const styles = StyleSheet.create({

    RegistrarseInicioText: {
        color: 'white',
        textAlign: 'center',
     
        fontSize: 18,
        width: '100%'
    },
    RegistrarseInicio: {
        backgroundColor: 'black',
        borderRadius: 70,
        padding: 15,
        marginTop:'5%',
        width: '47%'
    },

});