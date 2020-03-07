import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Profile = (props) => {
    return (
        <View style={styles.container} > 
            <Text>Profile</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({ 
   container: {
    flex: 1,
    backgroundColor: '#F9F9F8',
    justifyContent:'center',
    alignItems:'center',

  },
})
