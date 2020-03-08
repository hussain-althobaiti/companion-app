import React from 'react'
import { StyleSheet, View,Text, ScrollView} from 'react-native'
import { Button ,Tile ,Avatar  } from '../node_modules/react-native-elements';
import { EvilIcons } from '@expo/vector-icons';


const Posts = (props) => {
    return (
    <View style={styles.Posts}>
        <View style={styles.Post} > 
         <Avatar rounded source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',}}/>
         <Text> {props.text}</Text> 
         <View style={styles.icons}>
         <EvilIcons name='like' size={35}/>
         <EvilIcons name='comment' size={35}/>
         </View>
        </View>
    </View>
    )
}

export default Posts

const styles = StyleSheet.create({
    Posts:{
        flex:1,
    
    },
    Post:{
        backgroundColor:'rgba(0, 245, 160, 1)',
        width:'95%',
        minWidth:'95%',
        marginTop:'2%',
        fontSize:10,
        padding:'3%',
        borderRadius:5,
    },
    icons:{
        flexDirection:'row',
    },

})
