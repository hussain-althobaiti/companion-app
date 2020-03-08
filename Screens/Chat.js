import React from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button ,ListItem } from 'react-native-elements';
import InChat from './InChat';

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





function ChatList(props) {
    return (
      <View >
  <ScrollView>
  {
    list.map((l, i) => (
      <ListItem button onPress={() => {props.navigation.navigate('InChat')}}
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider/>))}
  </ScrollView>
      </View>
    );
  }

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatList" component={ChatList} options={{ title: 'Chats' }} />
      <Stack.Screen name="InChat" component={InChat}  options={{ title: 'InChat' }} />
    </Stack.Navigator>
  );
}


const Chat = () => {
    return (
        <MyStack/>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F8',
        justifyContent:'center',
        alignItems:'center',
    
      },
})
