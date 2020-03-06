import React,{useState} from '../node_modules/react';
import { StyleSheet, Text, View ,Image ,TextInput, ImageBackground, TouchableNativeFeedback , Alert} from 'react-native';
import { Button  } from '../node_modules/react-native-elements';


function Login(props) {
    return (
      <View style={styles.container}>
            <TouchableNativeFeedback>
            <View style={styles.image}>
            <Image style={{width:'90%',height:'25%'}} source={require('../assets/loginLogo.png')} />
            </View>
            </TouchableNativeFeedback>
            <View style={styles.Buttons}>    
            <ImageBackground style={{width:'100%',height:'100%'}} source={require('../assets/BG.png')}>
            <View style={styles.TextInput}>
              <TextInput placeholder='Email'/>
            </View>
            <View style={styles.TextInput}>
            <TextInput placeholder='Password'/>
            </View>
            <View style={styles.Button}>
            <Button
            linearGradientProps={{colors: ['rgba(200, 78, 137, 1)', 'rgba(241, 95, 121, 1)'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },}} title="Login" onPress={()=>props.navigation.navigate('Main', {
              screen: 'Settings',})
            }/>
            </View>
            </ImageBackground>
            </View>  
          </View>
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
    TextInput:{
      marginTop:30,
      borderWidth:2,
      borderColor:'#000',
      width:'70%',
      alignSelf:'center',
      justifyContent: 'center',
      borderRadius:1,
      backgroundColor:'#f8f8f8',
      padding:3,
    }
  })
  
export default Login
