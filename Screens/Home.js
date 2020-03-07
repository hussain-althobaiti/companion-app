import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

function Likes() {
    return (
      <View style={styles.container}>
        <Text>Likes!</Text>
      </View>
    );
  }
  
  function New() {
    return (
      <View style={styles.container}>
        <Text>New!</Text>
      </View>
    );
  }
  
  function Trending() {
    return (
      <View style={styles.container}>
        <Text>Trending!</Text>
      </View>
    );
  }
  
function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="New" component={New} />
        <Tab.Screen name="Trending" component={Trending} />
        <Tab.Screen name="Likes" component={Likes} />
      </Tab.Navigator>
    );
  }
  
const Home = (props) => {
    return (
        <MyTabs/>
        )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F8',
        justifyContent:'center',
        alignItems:'center',
      },
})
