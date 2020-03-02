import * as React from 'react';
import { Text, View ,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';




function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./src/logo1.png')}  style={{width: 300, height: 100}} />
        <Button title='LOGIN'/>
        <Button title='SIGNUP'/>
        </View>
    );