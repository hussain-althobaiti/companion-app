import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function HomeScreen1() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  

  const Tab = createBottomTabNavigator();


const NarBar = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen1} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  
    )
}



const Main = () => {
    return (
        <NavigationContainer>
            <NarBar/>
        </NavigationContainer>

    )
}

export default Main

const styles = StyleSheet.create({})
