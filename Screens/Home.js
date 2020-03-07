import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = (props) => {
    return (
        <View style={styles.container} > 
            <Text>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F8',
        justifyContent:'center',
        alignItems:'center',
    
      },
})
