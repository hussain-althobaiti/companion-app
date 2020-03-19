import React, {useState}from 'react'
import { StyleSheet, View,Text, ScrollView,TouchableHighlight} from 'react-native'
import { Button ,Tile ,Avatar } from '../node_modules/react-native-elements';
import {MaterialIcons,AntDesign } from '@expo/vector-icons';



const Posts = (props) => {

    const [state, setstate] = useState("#fff")
    return (
        <View style={styles.Posts}>
        <View style={styles.Post} > 
         <Avatar rounded size="medium" source={props.Avatar}/>
         <View style={styles.text}>
         <Text > {props.text}</Text>
          </View>
        <View style={styles.icons}>
         <AntDesign  onPress={()=>{if(state==='#fff'){setstate('#ea424f')}else{setstate('#fff')}}} color={state} name='heart' size={27}/>
         <MaterialIcons onPress={()=>{console.log("comments");}} name='comment' color='#fff' size={27}/>
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
        justifyContent:'space-between'
    },
    text:{
        justifyContent:'center',
        padding:20,
    },

})
