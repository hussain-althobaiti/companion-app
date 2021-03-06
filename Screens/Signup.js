import React,{useState} from '../node_modules/react';
import { StyleSheet, Text, View ,Image ,TextInput, ImageBackground, TouchableNativeFeedback,Alert,SafeAreaView  ,ScrollView ,KeyboardAvoidingView } from 'react-native';
import { Button  } from '../node_modules/react-native-elements';
import * as firebase from 'firebase';


function Signup(props) {
  const [state, setstate] = useState(
    {
    name:'1',
    email:'1',
    password:'123456',
    error: '',
    valid:false,
  }
    );
  // (e)=>setstate({...state, error:e})
  
    handlersignup =()=>{
      console.log(state);
      const name=(state.name)
      const email=(state.email)
      const password=(state.password)  
      const error=(state.error)  
       
       firebase.auth().createUserWithEmailAndPassword(email,password).then(() =>props.navigation.navigate('Login')).catch((e)=>setstate({...state, error:e}))

      };
  
  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1}}>
      <View style={styles.container}>
            <TouchableNativeFeedback>
            <View style={styles.image}>
            <Image style={{width:'90%',height:'35%'}} source={require('../assets/loginLogo.png')} />
            </View>
            </TouchableNativeFeedback>
            <View style={styles.Buttons}>
            <ImageBackground style={{width:'100%',height:'100%'}} source={require('../assets/BG.png')}>
            <View style={styles.TextInput}>
            <TextInput placeholder='Name' onChangeText={(text)=>setstate({...state, name:text})} />
            </View>
            <View style={styles.TextInput}>
              <TextInput placeholder='Email' textContentType='emailAddress' onChangeText={(text)=>setstate({...state, email:text})}/>
            </View>
            <View style={styles.TextInput}>
            <TextInput placeholder='Password' secureTextEntry onChangeText={(text)=>setstate({...state, password:text})}/>
            </View>
            <View style={styles.Button}>
            <Button
            linearGradientProps={{colors: ['rgba(200, 78, 137, 1)', 'rgba(241, 95, 121, 1)'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },}} title="Signup" onPress={handlersignup}/>
            </View>
            <View >
              <Text style={styles.error} >{state.error.message}</Text>
            </View>
            </ImageBackground>
            
            </View>  
          </View>
            </KeyboardAvoidingView>

    );
  }


  
const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#F9F9F8',
    },
    error:{
      color:'#F44336',
      alignItems:'center',
      alignSelf:'center',
      fontSize:16,
      fontWeight:'bold',
      margin:'2%',
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
      flex:2,
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
      padding:4,
    }
  })
  
export default Signup
