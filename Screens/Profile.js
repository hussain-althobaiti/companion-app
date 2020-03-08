import React from 'react'
import { StyleSheet, Text, View ,TouchableNativeFeedback} from 'react-native'
import { Avatar ,Button} from "react-native-elements";

const Profile = (props) => {
    return (
        <View style={styles.container} > 
        <Avatar
        size="xlarge"
        rounded
        title="CR"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}/>

         <Text>Profile</Text>
         <Button title="follow" type="outline"/>
         <Button title="message" type="outline"/>
        <View>
            <Text>About</Text>
            <View><Text>Enim incididunt et culpa ad dolore elit aliqua dolore est enim do sint officia sunt.</Text></View>
        </View>
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
