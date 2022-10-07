import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonTransProfesor = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.BotonTransProfesor}
            onPress={onPress}
        >
        </TouchableOpacity>
       
    )
}

export default BotonTransProfesor

const styles = StyleSheet.create({

    BotonTransProfesor: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        width: 130,
        height: 130,
        top: '-63.5%',
        left:30
    },

});