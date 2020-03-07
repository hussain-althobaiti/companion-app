import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main';
import Post from './Post';
import Profile from './Profile';
import Search from './Search';


  

  const Tab = createBottomTabNavigator();


const NarBar = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Post" component={Post} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
  
    )
}

export default NarBar

const styles = StyleSheet.create({})
