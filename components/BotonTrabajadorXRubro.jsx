import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const BotonTrabajadorXRubro = (props) => {
    const { onPress, NombreApellido, Foto } = props
    return (
        <TouchableOpacity style={styles.BotonRubro} onPress={onPress}>
            <Image style={styles.RoundButton3} source={{
                uri:Foto,
            }}/>
            <Text style={styles.Texto}>{NombreApellido}</Text>
        </TouchableOpacity>
    )
}

export default BotonTrabajadorXRubro

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
