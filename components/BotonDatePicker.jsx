import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotonPicker = (props) => {

    const { onPress, title, disable } = props

    return (
    
        <TouchableOpacity
        disabled={disable}
            style={styles.dato}
            onPress={onPress}
            
        >
            <Text  style={styles.button3Text}>
            {title}
            </Text>

        </TouchableOpacity>

    )
}

export default BotonPicker


const styles = StyleSheet.create({

    button3Text: {
        color: 'gray',
        textAlign: 'center',
     
        fontSize: 18,
        width: '100%'
    },
    button3: {
        backgroundColor: 'black',
        borderRadius: 70,
        padding: 15,
        marginLeft:'0%',
        width: '80%',
        top: '10%',
    },
    dato: {
        fontSize: 18,
        marginTop: '5%',
        marginLeft: '0%',
        width: '80%',
        alignItems: 'center',
        borderWidth: 2,
        padding: '3%',
        top: '8%',
        backgroundColor: '#F4F4F4',
    
      },

});