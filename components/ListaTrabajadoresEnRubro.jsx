import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';

const ListaTrabajadoresEnRubro = (props) => {
    const { text, image, onPress} = props
    return (
        <TouchableOpacity style={styles.BotonRubro} onPress={ onPress}>
            
            <Image style={styles.RoundButton3} source={{ uri: image }}/>
            <Text style={styles.Texto}>{text}</Text>
              </TouchableOpacity>
    )
}

export default ListaTrabajadoresEnRubro

const styles = StyleSheet.create({

    BotonRubro: {
        backgroundColor: '#F4F4F4',
        width: '200%',
        height: 75,
        marginHorizontal: -1,
        marginVertical: -0.4,
        borderWidth: 0.4,
      
    },
    RoundButton3: {
        width: 60,
        height: 60,
        top: '9.5%',
        borderRadius: 180,
        backgroundColor: '#F4F4F',
        marginLeft: 5.5,
    },

    Texto: {
        fontWeight: 'bold',
        marginTop: '-5.5%',
        fontSize: 17,
        color: '#000000',
        marginLeft: 85,
    },
});
