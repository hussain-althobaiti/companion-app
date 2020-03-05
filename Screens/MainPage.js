
import React,{useState} from './node_modules/react';
import { StyleSheet, Text, View ,Image ,TextInput, ImageBackground, TouchableNativeFeedback } from 'react-native';
import { Button  } from './node_modules/react-native-elements';
import { Ionicons,MaterialIcons ,AntDesign} from './node_modules/@expo/vector-icons';
import {NavigatorNativeContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';

const MainPage = () => {

    const [state, setstate] = useState(0);
    const Stack = createStackNavigator();
    return (
        <View style={styles.container}>
          <TouchableNativeFeedback>
          <View style={styles.image}>
          <Image style={{width:'90%',height:'25%'}} source={require('../assets/loginLogo.png')} />
          </View>
          </TouchableNativeFeedback>

          <View style={styles.Buttons}>    
          <ImageBackground style={{width:'100%',height:'100%'}} source={require('../assets/BG.png')}>
          <View style={styles.Button}>
          <Button linearGradientProps={{colors: ['rgba(0, 245, 160, 1)', 'rgba(0, 217, 245, 1)'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },}} title="LOGIN" onPress={() => navigation.navigate('Login')}/>
          </View>
    
          <View style={styles.Button}>
          <Button 
          linearGradientProps={{colors: ['rgba(200, 78, 137, 1)', 'rgba(241, 95, 121, 1)'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },}} title="SIGNUP" onPress={()=> {console.log("SIGNUP",state),setstate(state+1) }}/>
          </View>
          </ImageBackground>
          </View>
      
        </View>
      );

    }

 
    const styles = StyleSheet.create({
    
      container: {
        flex: 1,
        backgroundColor: '#fff',
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
    
      },
    })

export default MainPage
