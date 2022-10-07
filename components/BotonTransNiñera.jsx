import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonTransNiñera = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.BotonTransNiñera}
            onPress={onPress}
        >
        </TouchableOpacity>
       
    )
}

export default BotonTransNiñera

const styles = StyleSheet.create({

    BotonTransNiñera: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        width: 130,
        height: 130,
        top: '-63.5%',
        left:30
    },

});