import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

 const Rectangle = () => {
    return (
    <View>
        style={styles.Rectangle}
    </View>

    )};

export default Rectangle


const styles = StyleSheet.create({

    Rectangle: {
        backgroundColor: '#F4F4F4',
        width: 200,
        height: 220,
          top: '50%'
    },

});