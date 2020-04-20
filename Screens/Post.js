import React ,{useState, useEffect} from 'react'
import { StyleSheet, Text, View ,TextInput,KeyboardAvoidingView,Alert} from 'react-native'
import { FontAwesome,Feather,MaterialCommunityIcons ,AntDesign ,MaterialIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {Camera} from 'expo-camera';

const Post = (props) => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(true);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
    return (
        <View style={styles.container} > 
        <Text style={styles.Text}>Post</Text>
        <View style={styles.TextInput}>
        <TextInput placeholder='what’s happening ?' />
        <View style={styles.icons}>
          <View style={styles.icon}>
        <AntDesign onPress={_pickImage} name='picture' size={30}/>
          </View>
          <View style={styles.icon}>
        <AntDesign name="camerao" size={30}  onPress={()=> {              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );Alert.alert('Camera')}}/>
              </View>
          <View style={styles.send}>
        <MaterialIcons onPress={()=>{ Alert.alert('send','send')}} name='send' size={30}/>
          </View>
        </View>
        </View>
        </View>
    )
}

_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1
  });
  console.log(result);

}


export default Post

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F9F9F8',

  },
  Text:{
      marginTop:"10%",
      marginLeft:"2%",
      fontSize:25,
  },
  TextInput:{
    borderWidth:2,
    padding:'2%',
    margin:"2%",
    minHeight:'25%',
  },
  icons:{    
    flexDirection:'row'
  },
  icon:{    
    marginTop:'30%',
    paddingLeft:'1.5%'
  },
  send:{    
    marginTop:'30%',
    paddingLeft:'72%'
  },})

