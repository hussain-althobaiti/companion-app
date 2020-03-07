import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Post = (props) => {
    return (
        <View style={styles.container} > 
            <Text>Post</Text>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F9F9F8',
    justifyContent:'center',
    alignItems:'center',

  },
})
