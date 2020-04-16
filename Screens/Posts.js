import React, {useState}from 'react'
import { StyleSheet, View,Text, ScrollView,TouchableHighlight,Alert,Modal} from 'react-native'
import { Button ,Tile ,Avatar } from '../node_modules/react-native-elements';
import {MaterialIcons,AntDesign } from '@expo/vector-icons';


const Posts = (props) => {

    const [state, setstate] = useState("#fff")
    return (

        <View style={styles.Posts}>
        <View style={styles.Post}>
         <Avatar rounded size="medium" source={props.Avatar} onPress={(e) =>{ Alert.alert('USERNAME','ABOUT THE USER')}}/>
         <Text>{props.title}</Text>
         <View >
         <Text style={styles.text}> {props.text}</Text>
        </View>
        <View style={styles.icons} >
         <AntDesign  onPress={()=>{if(state==='#fff'){setstate('#F95959')}else{setstate('#fff')}}} color={state} name='heart' size={30}/>
         <MaterialIcons onPress={()=>{ Alert.alert('','comment.........................................................comment.........................................................comment.........................................................comment.........................................................comment.........................................................comment.........................................................')}}  name='comment' color='#fff' size={30}/>
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
        fontSize:11,
        padding:'3%',
        borderRadius:5,
    },
    icons:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:'5%',
        paddingLeft:'2%',
        paddingRight:'2%',
    },

    text:{
        fontSize:15,
        padding:"4%",
    },

})
