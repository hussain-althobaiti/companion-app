import React from 'react';
import { View, Text ,ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';


const loading = () => {


    firebase.auth().onAuthStateChanged(user =>{
        props.navigation.navigate(user ? 'App' : 'Auth');
    })
    return (
        <View>
            <Text>loading</Text>
            <ActivityIndicator size='large'> </ActivityIndicator>
        </View>
    )
}

export default loading
