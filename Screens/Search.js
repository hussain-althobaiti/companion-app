import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

const Search = (props) => {
    return (
        <View style={styles.container} > 
            <Text style={styles.Text}>Search</Text>
            <TextInput style={styles.TextInput}/>
        </View>
    )
}

export default Search

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

  },
})
