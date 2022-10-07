import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonTransPintor = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.BotonTransPintor}
            onPress={onPress}
        >
        </TouchableOpacity>
       
    )
}

export default BotonTransPintor

const styles = StyleSheet.create({

    BotonTransPintor: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        width: 130,
        height: 130,
        top: '-4%',
        left:30
    },

});