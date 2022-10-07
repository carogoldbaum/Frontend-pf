import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonTransLimpieza = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.BotonTransLimpieza}
            onPress={onPress}
        >
        </TouchableOpacity>
       
    )
}

export default BotonTransLimpieza

const styles = StyleSheet.create({

    BotonTransLimpieza: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        width: 130,
        height: 130,
        top: '-63.5%',
        left:30
    },

});