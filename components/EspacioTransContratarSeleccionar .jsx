import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const EspacioTransContratarSeleccionar = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.EspacioEnBlancoContratar}
            onPress={onPress}
        >
        
        </TouchableOpacity>
       
    )
}

export default EspacioTransContratarSeleccionar


const styles = StyleSheet.create({

    EspacioEnBlancoContratar: {
        backgroundColor: 'rgba(52, 52, 52, 0.9)',
        width: 200,
        height: 220,
          top: '-37%'
    },

});