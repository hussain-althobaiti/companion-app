import React from 'react'
import { StyleSheet, Text, View ,TextInput} from 'react-native'
import { FontAwesome,Ionicons,MaterialCommunityIcons ,AntDesign ,MaterialIcons} from '@expo/vector-icons';

const Post = (props) => {
    return (
        <View style={styles.container} > 
        <Text style={styles.Text}>Post</Text>
        <View style={styles.TextInput}>
        <TextInput />
        <View style={styles.icons}>
        <FontAwesome  name='photo' size={30}/>
        <AntDesign name="camerao" size={30}/>
        </View>
        </View>
        </View>
    )
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
    height:'25%',
  },
  icons:{
    marginTop:'22%',
    flexDirection:'row'
  },
})

