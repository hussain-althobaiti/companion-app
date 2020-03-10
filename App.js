import * as React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput, ImageBackground, TouchableNativeFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button  } from './node_modules/react-native-elements';
import * as firebase from 'firebase';

import Login from './Screens/Login';
import Signup from './Screens/Signup';
import HomeScreen from './Screens/HomeScreen';
import Main from './Screens/Main';
import { enableScreens } from 'react-native-screens';

enableScreens();

var firebaseConfig = {
  apiKey: "AIzaSyBGXmBiJhQsAiM3lD5YkLEXxg796Jy2-i8",
  authDomain: "companion-84daa.firebaseapp.com",
  databaseURL: "https://companion-84daa.firebaseio.com",
  projectId: "companion-84daa",
  storageBucket: "companion-84daa.appspot.com",
  messagingSenderId: "138698256117",
  appId: "1:138698256117:web:d895ae378cb9db82b1dfbc",
  measurementId: "G-N0EBX4KVQM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ title: 'My home',headerShown:false }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Main" component={Main} independent={true} options={{ title: 'Main',headerShown:false }} />
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer independent={true} >
      <MyStack />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#F9F9F8',
  },

  image:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },

  TextInput:{
    borderWidth:2,
  },

  Buttons:{
    flex:1.5,
    justifyContent: 'center',

  },
  Button:{
    marginTop:40,
    borderWidth:2,
    borderColor:'#fff',
    width:'70%',
    alignSelf:'center',
    justifyContent: 'center',
    borderRadius:6,
    backgroundColor:'#f8f8f8'
  },
  TextInput:{
    marginTop:30,
    borderWidth:2,
    borderColor:'#000',
    width:'70%',
    alignSelf:'center',
    justifyContent: 'center',
    borderRadius:1,
    backgroundColor:'#f8f8f8',
    padding:3,
  }
})
