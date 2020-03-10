import React from 'react'
import { View, Text } from 'react-native'

const Aath = () => {
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default Aath

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
firebase.analytics();
