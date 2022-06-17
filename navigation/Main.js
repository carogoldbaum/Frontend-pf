import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import inicio from '../screens/inicio'

const Stack = createNativeStackNavigator()

const Main =()=>{
   
return(
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen
                name='inicio'
                component={ inicio }
            />

        </Stack.Navigator>
    </NavigationContainer>
)
}

export default Main

const style = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'green',
        marginBottom: 10,
        paddingHorizontal:20,
        paddingHorizontal:10,

    },
    buttonText:{
    color:'white'
    }
    })