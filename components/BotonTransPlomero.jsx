import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonTransPlomero = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.BotonTransPlomero}
            onPress={onPress}
        >
        </TouchableOpacity>
       
    )
}

export default BotonTransPlomero

const styles = StyleSheet.create({

    BotonTransPlomero: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        width: 130,
        height: 130,
        top: '-5%',
        left:30
    },

});