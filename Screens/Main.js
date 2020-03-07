import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,MaterialCommunityIcons ,AntDesign ,MaterialIcons} from '@expo/vector-icons';

import Post from './Post';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Chat from './Chat';


  

  const Tab = createBottomTabNavigator();
  
  const NarBar = () => {
      
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: '#e91e63',showLabel: false, }}>
          <Tab.Screen backBehavior={"none"} name="Home" component={Home} options={{tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />),}}/>
          <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ({ color, size }) => (<Ionicons name="md-search" color={color} size={size} />),}}/>
          <Tab.Screen name="Post" component={Post} options={{tabBarIcon: ({ color, size }) => (<AntDesign name="pluscircleo" color={color} size={size} />),}}/>
          <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: ({ color, size }) => (<AntDesign name="user" color={color} size={size} />),}}/>
          <Tab.Screen name="Chat" component={Chat} options={{tabBarIcon: ({ color, size }) => (<MaterialIcons name="chat-bubble-outline" color={color} size={size} />),}}/>
        </Tab.Navigator>
  
    )
}


const Main = () => {
    return (
        <NavigationContainer independent={true}>
            <NarBar/>
        </NavigationContainer >

    )
}

export default Main

const styles = StyleSheet.create({})
