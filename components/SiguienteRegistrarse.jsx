import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const SiguienteRegistrarse = (props) => {

    const { onPress, text } = props

    return (
    
        <TouchableOpacity

            style={styles.button3}
            onPress={() => {
                if (this.state.text.trim() === "") {
                  this.setState(() => ({ nameError: "First name required." }));
                } else {
                  this.setState(() => ({ nameError: null }));
                }
              }}
              title="Login"
    
        >
            <Text style={styles.button3Text}>
                {text}
            </Text>
        
            
         

        </TouchableOpacity>
       
    )
}

export default SiguienteRegistrarse


const styles = StyleSheet.create({

    button3Text: {
        color: 'white',
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
        top: '11%',
    },

});