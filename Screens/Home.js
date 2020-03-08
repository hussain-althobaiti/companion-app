import React from 'react'
import { StyleSheet, Text, View, Button  ,ScrollView,ListItem} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Posts from './Posts';
const Tab = createMaterialTopTabNavigator();
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
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

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function Likes() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Posts text={ makeid(50)}/>   
        <Posts text={ makeid(50)}/>   
        <Posts text={ makeid(40)}/>   
        <Posts text={ makeid(50)}/>   
        <Posts text={ makeid(30)}/>   
        <Posts text={ makeid(10)}/>   
        <Posts text={ makeid(80)}/>   
      </View>
      </ScrollView>
    );
  }
  function New() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Posts text={ makeid(54)}/>   
        <Posts text={ makeid(84)}/>   
        <Posts text={ makeid(48)}/>   
        <Posts text={ makeid(49)}/>   
        <Posts text={ makeid(94)}/>   
        <Posts text={ makeid(75)}/>   
        <Posts text={ makeid(15)}/>   
      </View>
      </ScrollView>
    );
  }
  
  function Trending() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Posts text={ makeid(78)}/>   
        <Posts text={ makeid(15)}/>   
        <Posts text={ makeid(54)}/>   
        <Posts text={ makeid(55)}/>   
        <Posts text={ makeid(48)}/>   
        <Posts text={ makeid(54)}/>   
        <Posts text={ makeid(48)}/>   
        <Posts text={ makeid(48)}/>   
        <Posts text={ makeid(48)}/>   
      </View>
      </ScrollView>    );
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
