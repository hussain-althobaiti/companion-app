import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NarBar from './NarBar';





const Main = () => {
    return (
            <NarBar independent={true}/>
    )
}

export default Main

const styles = StyleSheet.create({})
