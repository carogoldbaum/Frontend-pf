import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonTransElectricista = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.BotonTransElectricista}
            onPress={onPress}
        >
        </TouchableOpacity>
       
    )
}

export default BotonTransElectricista

const styles = StyleSheet.create({

    BotonTransElectricista: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        width: 130,
        height: 130,
        top: '-63.5%',
        left:30
    },

});