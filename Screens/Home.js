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
      <Tab.Navigator style={styles.Tab}  tabBarOptions={{activeTintColor:'#00F5A0' ,labelStyle: { color:'#000000',fontSize: 20 ,fontWeight: 'bold' },indicatorStyle:{backgroundColor:'#00F5A0' ,height:5} ,  }}>
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
      Tab:{
          marginTop:'6%'
      },
})
