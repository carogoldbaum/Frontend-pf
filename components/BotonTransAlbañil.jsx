import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonTransAlbañil = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.BotonTransAlbañil}
            onPress={onPress}
        >
        </TouchableOpacity>
       
    )
}

export default BotonTransAlbañil

const styles = StyleSheet.create({

    BotonTransAlbañil: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        width: 130,
        height: 130,
        top: '-63.5%',
        left:30
    },

});