import React from 'react'
import { StyleSheet, Text, View ,TextInput,KeyboardAvoidingView,Alert} from 'react-native'
import { Avatar  ,Button } from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react'

const ProfileStack = createStackNavigator();

const EditProfile =(props )=>{
    
    return (
        
        <View>
        <ScrollView>
        <Text>Edit Profile</Text>
        <View  style={styles.inputs} >
        <TextInput style={styles.input}  placeholder='Username'/>
        <TextInput style={styles.input}  placeholder='Birthday'/>
        <TextInput style={styles.input}  placeholder='Gender '/>
        <TextInput style={styles.input}  placeholder='About '/>
        <TextInput style={styles.input}  placeholder='Hobbies'/>
        <TextInput style={styles.input}  placeholder='Interests'/>
        </View>

        <KeyboardAvoidingView style={styles.Buttons}>
        <Button buttonStyle={{marginBottom:'2%'}} title='Save' onPress={() => props.navigation.navigate('SetProfile')} />
        <Button title='Cancel' onPress={() => props.navigation.goBack()} />
        </KeyboardAvoidingView>
        </ScrollView>

    </View>
    );
    
}

const Profile = (props ) => {
    return (
        <EditStack/>
        );
    }
    
    const SetProfile = (props ) => {
        const [state, setstate] = useState('#000')
        return (
            <ScrollView>
        <View style={styles.container} > 
        <Avatar
        size="xlarge"
        rounded
        title="me"
        onPress={() => props.navigation.navigate('EditProfile')} 
        activeOpacity={0.7}
        showEditButton= {true}
        />
         <Text>Profile name</Text>
        <View style={styles.Buttons}>
         <Button buttonStyle={styles.Button} titleStyle={{color:state ,fontWeight:'bold',fontSize:20,width:'80%'}} onPress={()=>{if(state==='#000'){setstate('#F95959')}else{setstate('#000')}}} title="Follow"  />
         <Button buttonStyle={styles.Button} titleStyle={{color:'#000'}} title="Message"onPress={()=>{ Alert.alert('send Message','Message')}} />
         </View>
        <View style={styles.about}>
            <Text>About</Text>
            <View>
                <Text>Enim incididunt et culpa ad dolore elit aliqua dolore est enim do sint officia sunt.</Text>
            </View>
        </View>
        <View style={styles.about}>
            <Text>Hobbies</Text>
            <View>
                <Text>Enim incididunt et culpa ad dolore elit aliqua dolore est enim do sint officia sunt.</Text>
            </View>
        </View>
        <View style={styles.about}>
            <Text>Interests</Text>
            <View>
                <Text>Enim incididunt et culpa ad dolore elit aliqua dolore est enim do sint officia sunt.</Text>
            </View>
        </View>

        </View>
        </ScrollView>
    )
}


function EditStack() {
    return (
      <ProfileStack.Navigator >
        <ProfileStack.Screen name="SetProfile" component={SetProfile} options={{ title: 'Profile',headerShown:false }} />
        <ProfileStack.Screen name="EditProfile" component={EditProfile}  options={{ title: 'Edit Profile' }} />
      </ProfileStack.Navigator>
    );
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
        marginTop:10,
        borderWidth:2,
        borderColor:'#000',
        width:'100%',
        alignSelf:'center',
        justifyContent: 'center',
        borderRadius:6,
        backgroundColor:'#fff',
    },
    Buttons:{
        margin:'2%',     
    },
    input:{
        margin:'2%',
        backgroundColor:"#fff",
        borderBottomColor:'#000',
        borderWidth: 1,
        fontSize:14,
        padding:'1%',
    }
})
