import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DrawerScreen from "../navigation/DrawerTab"
import { NavigationContainer } from '@react-navigation/native';

export default function DashBoard() {
  return (
    <NavigationContainer>
     <DrawerScreen/>
    </NavigationContainer>
  
  );
}

