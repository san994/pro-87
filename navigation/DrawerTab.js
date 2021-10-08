import React, { Component } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StackScreen from "./StackNavigation"
import Profile from '../screens/Profile';

import LogOut from "../screens/LogOut"

const Drawer = createDrawerNavigator()
 
const DrawerScreen =()=>{
    return(
     <Drawer.Navigator>
         <Drawer.Screen name="Home" component={StackScreen}/>
         <Drawer.Screen name="profile" component={Profile}/>
         <Drawer.Screen name="Log Out" component={LogOut}/>
     </Drawer.Navigator>
    )
}

export default DrawerScreen