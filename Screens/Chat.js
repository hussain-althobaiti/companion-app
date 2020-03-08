import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

import InChat from './InChat';

function ChatList(props) {
    return (
      <View style={styles.container}>
        <Text>Chat</Text>
        <Button  onPress={() => props.navigation.navigate('InChat')} title="Solid Button"/>
      </View>
    );
  }

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatList" component={ChatList} options={{ title: 'my chat',headerShown:false }} />
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
