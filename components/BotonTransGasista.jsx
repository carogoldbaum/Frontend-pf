import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonTransGasista = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.BotonTransGasista}
            onPress={onPress}
        >
        </TouchableOpacity>
       
    )
}

export default BotonTransGasista

const styles = StyleSheet.create({

    BotonTransGasista: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        width: 130,
        height: 130,
        top: '-63.5%',
        left:30
    },

});