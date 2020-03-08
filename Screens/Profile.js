import React from 'react'
import { StyleSheet, Text, View ,TouchableNativeFeedback} from 'react-native'
import { Avatar ,Button} from "react-native-elements";
import { ScrollPager } from 'react-native-tab-view';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = (props) => {
    return (
        <ScrollView>
        <View style={styles.container} > 
        <Avatar
        size="xlarge"
        rounded
        title="me"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}/>
         <Text>Profile name</Text>
        <View style={styles.Button}>
         <Button title="follow" type="outline"/>
         <Button title="message" type="outline"/>
         </View>
        <View style={styles.about}>
            <Text>About</Text>
            <View>
                <Text>Enim incididunt et culpa ad dolore elit aliqua dolore est enim do sint officia sunt.</Text>
            </View>
        </View>
        <View style={styles.about}>
            <Text>About</Text>
            <View>
                <Text>Enim incididunt et culpa ad dolore elit aliqua dolore est enim do sint officia sunt.</Text>
            </View>
        </View>
        <View style={styles.about}>
            <Text>About</Text>
            <View>
                <Text>Enim incididunt et culpa ad dolore elit aliqua dolore est enim do sint officia sunt.</Text>
            </View>
        </View>
        <View style={styles.about}>
            <Text>About</Text>
            <View>
                <Text>Enim incididunt et culpa ad dolore elit aliqua dolore est enim do sint officia sunt.</Text>
            </View>
        </View>
        <View style={styles.about}>
            <Text>About</Text>
            <View>
                <Text>Enim incididunt et culpa ad dolore elit aliqua dolore est enim do sint officia sunt.</Text>
            </View>
        </View>
        </View>
        </ScrollView>

    )
}

export default Profile

const styles = StyleSheet.create({ 
   container: {
    flex: 1,
    backgroundColor: '#F9F9F8',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'16%',

  },
  about:{
    backgroundColor:'rgba(0, 245, 160, 1)',
    width:'95%',
    minWidth:'95%',
    marginTop:'2%',
    fontSize:15,
    padding:'3%',
    borderRadius:5,
    },
    Button:{
        margin:'2%',

    }
})
