import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity} from 'react-native';
import Main from './navigation/Main';

export default function App() {
  return (
    <NavigationContainer>
      { <Main/>}
    </NavigationContainer>
  );
};








