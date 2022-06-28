import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonRegistrarseInicio = (props) => {

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

export default BotonRegistrarseInicio


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