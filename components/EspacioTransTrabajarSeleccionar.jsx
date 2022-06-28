import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const EspacioTransTrabajarSeleccionar = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.EspacioEnBlancoTrabajar}
            onPress={onPress}
        >
        
        </TouchableOpacity>
       
    )
}

export default EspacioTransTrabajarSeleccionar


const styles = StyleSheet.create({

    EspacioEnBlancoTrabajar: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        width: 200,
        height: 220,
          top: '-25%'
    },

});