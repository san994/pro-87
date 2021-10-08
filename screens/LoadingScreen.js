import React,{Component} from "react"
import {View,StyleSheet,Text,Image,TouchableOpacity} from "react-native"

import { RFValue } from "react-native-responsive-fontsize"
import firebase from "firebase"

export default class LoadingScreen extends Component{

    componentDidMount(){
        this.checkIfLogIn()
    }

    checkIfLogIn=()=>{
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
            this.props.navigation.navigate("DashBoard")
        }else{
            this.props.navigation.navigate("LoginScreen")
        }
      })
    }

    render(){
      return (
        <View style={styles.container}>
           <Text>loading</Text>
        </View>
         
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})