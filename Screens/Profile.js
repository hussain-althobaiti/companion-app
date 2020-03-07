import React from 'react'
import { StyleSheet, Text, View ,TouchableNativeFeedback} from 'react-native'

const Profile = (props) => {
    return (
        <TouchableNativeFeedback>
        <View style={styles.container} > 
            <Text>Profile</Text>
        </View>
        </TouchableNativeFeedback>

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
