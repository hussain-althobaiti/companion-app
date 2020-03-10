import React from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import { Avatar ,Button ,Input } from "react-native-elements";
import { TextInput } from 'react-native-gesture-handler';

const InChat = (props) => {
    const {person} = props.route.params
    return (
        <View style={styles.container} >
        <ScrollView>
        <View style={styles.message}>
            <Text style={styles.name}>{person.name}</Text>
            <Text>{person.subtitle}</Text>
        </View>            
        </ScrollView>
        <View style={styles.input}>
            <TextInput placeholder='BASIC INPUT'/>
        </View>
        </View>
    )
}

export default InChat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F8',
      },
      name:{
    fontSize:16,

      },

      message: {
        justifyContent:'flex-start',
        alignSelf:'stretch',
        backgroundColor:'rgba(0, 245, 160, 1)',
        marginTop:'2%',
        fontSize:10,
        padding:'3%',
        margin:'2%',
        borderRadius:5,
      },
      input:{
        justifyContent:'flex-end',
        borderRadius:5,
        backgroundColor:"#fff",
        borderBottomColor:'#000',
        borderWidth: 1,
        fontSize:14,
        padding:'1%',
    }

})
