import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const BotonRubro = (props) => {
    const { onPress, text, image } = props
    return (
        <TouchableOpacity style={styles.BotonRubro} onPress={onPress}>
            <Image style={styles.RoundButton3} source={{
                uri:image,
            }}/>
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
        marginHorizontal: 20,
        marginVertical: 20,
        alignItems: 'center',
    },
    RoundButton3: {
        width: 130,
        height: 130,
        padding: 10,
        borderRadius: 180,
        backgroundColor: '#F9904F',
    },

    Texto: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000000',
    },
});
