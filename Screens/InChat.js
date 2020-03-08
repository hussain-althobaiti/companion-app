import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar ,Button} from "react-native-elements";

const InChat = (props) => {
    return (
        <View style={styles.container} > 
            <Text>InChat</Text>
            <Button  onPress={() => props.navigation.navigate('ChatList')} title="Solid Button"/>
        </View>
    )
}

export default InChat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F8',
        justifyContent:'center',
        alignItems:'center',
    
      },
})
