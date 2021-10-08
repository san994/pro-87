import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from "./screens/LoadingScreen"
import LoadingScreen from "./screens/LogonScreen"
import DashBoard from "./screens/DashBoard"

import {createSwitchNavigator,createAppContainer} from "react-navigation"

import firebase from "firebase"
import { firebaseConfig } from './config';


const SwitchNavigator = createSwitchNavigator({
  LoginScreen : LoginScreen,
  LoadingScreen :LoadingScreen,
  DashBoard:DashBoard
})

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}else{
  firebase.app()
}

const AppContainer = createAppContainer(SwitchNavigator)

export default function App() {
  return(
   <AppContainer/>
  );
}

