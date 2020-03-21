import React from 'react'
import { StyleSheet, Text, View, Button  ,ScrollView} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Posts from './Posts';

const Tab = createMaterialTopTabNavigator();

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President  cjniej wdniwnd dn3wid in2eni2nd idniw indin ndin3 nindi3 idin'
  },
  {
    name: 'adhamdannaway',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'AM_Kn2',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/AM_Kn2/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'BillS Kenney',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Brian Purkiss',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BrianPurkiss/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Bryan Horsey',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BryanHorsey/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'kfriedson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'brynn',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chakintosh',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/Chakintosh/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Isary Amairani',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/IsaryAmairani/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Karimmove',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/Karimmove/128.jpg',
    subtitle: 'Vice Chairman'
  },
]



function Likes(props) {
    return (
      <ScrollView>
      <View style={styles.container}>
      {
    list.map((l, i) => (
      <Posts
        key={i}
        Avatar={{ uri: l.avatar_url  }}
        title={l.name}
        text={l.subtitle}
        />))}
 
      </View>
      </ScrollView>
    );
  }
  function New() {
    return (
      <ScrollView>     
      <View style={styles.container}>
 
      {
    list.map((l, i) => (
      <Posts button onPress={() => {props.navigation.navigate('InChat', {person: l}) }}
        key={i}
        Avatar={{ uri: l.avatar_url  }}
        title={l.name}
        text={l.subtitle}
        />))}     
      </View>
      </ScrollView>
    );
  }
  
  function Trending() {
    return (
      <ScrollView>
      <View style={styles.container}>
      {
    list.map((l, i) => (
      <Posts button onPress={() => {props.navigation.navigate('InChat', {person: l}) }}
        key={i}
        Avatar={{ uri: l.avatar_url  }}
        title={l.name}
        text={l.subtitle}
        />))}
 
      </View>
      </ScrollView>    
      );
  }
  
function MyTabs() {
    return (
      <Tab.Navigator style={styles.Tab}  tabBarOptions={{activeTintColor:'#000' ,labelStyle: { fontSize: 18 ,fontWeight: 'bold' },indicatorStyle:{backgroundColor:'#00F5A0' ,height:5} ,  }}>
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
        backgroundColor: '#F9F9F8',
        justifyContent:'center',
        alignItems:'center',
      },
      Tab:{
          marginTop:'6%',
      },
})
