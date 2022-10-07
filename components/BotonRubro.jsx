import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonRubro = (props) => {

    const { onPress, text, image } = props

    return (

        <TouchableOpacity

            style={styles.BotonRubro}
          
        >
            <Image style={styles.RoundButton3} source={image}></Image>

            <Text style={styles.Texto}>{text}</Text>

        </TouchableOpacity>

    )
}

export default BotonRubro

const styles = StyleSheet.create({

    BotonRubro: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        width: 130,
        height: 130,
        top: '-63.5%',
        left: 30
    },
    RoundButton3: {
        width: 130,
        height: 130,
        padding: 10,
        borderRadius: 180,
        backgroundColor: '#F9904F',
        top: '50%',
        right: '-10%',
    },

    Texto: {
        fontWeight: 'bold',
        top: '52%',
        right: '-17.8%',
        fontSize: 15,
    },
});