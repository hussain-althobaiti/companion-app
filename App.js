import * as React from 'react';
import { StyleSheet, Text, View ,Image ,TextInput, ImageBackground, TouchableNativeFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button  } from './node_modules/react-native-elements';


function HomeScreen({ navigation }) {
  return (
          <View style={styles.container}>
          <TouchableNativeFeedback>
          <View style={styles.image}>
          <Image style={{width:'90%',height:'25%'}} source={require('./assets/loginLogo.png')} />
          </View>
          </TouchableNativeFeedback>
          <View style={styles.Buttons}>    
          <ImageBackground style={{width:'100%',height:'100%'}} source={require('./assets/BG.png')}>
          <View style={styles.Button}>
          <Button linearGradientProps={{colors: ['rgba(0, 245, 160, 1)', 'rgba(0, 217, 245, 1)'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },}} title="LOGIN" onPress={() => navigation.navigate('Login')}/>
          </View>
          <View style={styles.Button}>
          <Button 
          linearGradientProps={{colors: ['rgba(200, 78, 137, 1)', 'rgba(241, 95, 121, 1)'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },}} title="SIGNUP" onPress={() => navigation.navigate('Signup')}/>
          </View>
          </ImageBackground>
          </View>  
        </View>
  );
}

function Signup({ navigation }) {
  return (
    <View style={styles.container}>
          <TouchableNativeFeedback>
          <View style={styles.image}>
          <Image style={{width:'90%',height:'25%'}} source={require('./assets/loginLogo.png')} />
          </View>
          </TouchableNativeFeedback>
          <View style={styles.Buttons}>    
          <ImageBackground style={{width:'100%',height:'100%'}} source={require('./assets/BG.png')}>
          <View style={styles.Button}>
          <TextInput placeholder='Name'/>
          </View>
          <View style={styles.Button}>
            <TextInput placeholder='Email'/>
          </View>
          <View style={styles.Button}>
          <TextInput placeholder='Password'/>
          </View>
          <View style={styles.Button}>
          <Button
          linearGradientProps={{colors: ['rgba(200, 78, 137, 1)', 'rgba(241, 95, 121, 1)'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },}} title="Signup" onPress={() => navigation.navigate('Login')}/>
          </View>
          </ImageBackground>
          </View>  
        </View>
  );
}

function Login({ navigation }) {
  return (
    <View style={styles.container}>
          <TouchableNativeFeedback>
          <View style={styles.image}>
          <Image style={{width:'90%',height:'25%'}} source={require('./assets/loginLogo.png')} />
          </View>
          </TouchableNativeFeedback>
          <View style={styles.Buttons}>    
          <ImageBackground style={{width:'100%',height:'100%'}} source={require('./assets/BG.png')}>
          <View style={styles.Button}>
            <TextInput placeholder='Email'/>
          </View>
          <View style={styles.Button}>
          <TextInput placeholder='Password'/>
          </View>
          <View style={styles.Button}>
          <Button
          linearGradientProps={{colors: ['rgba(200, 78, 137, 1)', 'rgba(241, 95, 121, 1)'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },}} title="Login" onPress={() => navigation.navigate('Signup')}/>
          </View>
          </ImageBackground>
          </View>  
        </View>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'My home',headerShown:false }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#F9F9F8',
  },

  image:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },

  TextInput:{
    borderWidth:2,
  },

  Buttons:{
    flex:1.5,
    justifyContent: 'center',

  },
  Button:{
    marginTop:40,
    borderWidth:2,
    borderColor:'#fff',
    width:'70%',
    alignSelf:'center',
    justifyContent: 'center',
    borderRadius:6,
    backgroundColor:'#f8f8f8'
  },
})
