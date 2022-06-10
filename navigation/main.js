import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import NavigationContainer from '@react-navigation/native';
import Inicio from '../screens/inicio'

const Stack = createNativeStackNavigator()

const main =()=>{
   
return(
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen
                name='inicio'
                component={ Inicio }
            />

        </Stack.Navigator>
    </NavigationContainer>
)
}

export default main