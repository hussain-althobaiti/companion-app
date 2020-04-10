import React from 'react'
import { StyleSheet, Text, View, Button  ,ScrollView} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Posts from './Posts';

const Tab = createMaterialTopTabNavigator();




function Likes(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
      {
        LikesList.map((l, i) => (
          <Posts
          key={i}
        Avatar={{ uri: l.avatar_url  }}
        title={l.name}
        text={l.subtitle}
        />))}
 
      </View>
      </ScrollView>
    );
  }
  function New() {
    return (
      <ScrollView>     
      <View style={styles.container}>
 
      {
        NewList.map((l, i) => (
          <Posts button onPress={() => {props.navigation.navigate('InChat', {person: l}) }}
        key={i}
        Avatar={{ uri: l.avatar_url  }}
        title={l.name}
        text={l.subtitle}
        />))}     
      </View>
      </ScrollView>
    );
  }
  
  function Trending() {
    return (
      <ScrollView>
      <View style={styles.container}>
      {
        TrendingList.map((l, i) => (
          <Posts button onPress={() => {props.navigation.navigate('InChat', {person: l}) }}
        key={i}
        Avatar={{ uri: l.avatar_url  }}
        title={l.name}
        text={l.subtitle}
        />))}
 
      </View>
      </ScrollView>    
      );
    }
  
    function MyTabs() {
      return (
      <Tab.Navigator style={styles.Tab}  tabBarOptions={{activeTintColor:'#000' ,labelStyle: { fontSize: 18 ,fontWeight: 'bold' },indicatorStyle:{backgroundColor:'#00F5A0' ,height:5} ,  }}>
        <Tab.Screen name="New" component={New} />
        <Tab.Screen name="Trending" component={Trending} />
        <Tab.Screen name="Likes" component={Likes} />
      </Tab.Navigator>
    );
  }
  
  const Home = (props) => {
    return (
      <MyTabs/>
      )
    }

    export default Home
    
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F8',
        justifyContent:'center',
        alignItems:'center',
      },
      Tab:{
        marginTop:'6%',
      },
    })
        
    
    const TrendingList = [
          {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/jarjan/128.jpg',
            subtitle: 'I was told there is a difference between temper and temperament. How can one explain this difference?'
          },
          {
            name: 'adhamdannaway',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: '  I ll be going to Boston a few times this month for work.'
          },
          {
            name: 'AM_Kn2',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/AM_Kn2/128.jpg',
            subtitle: 'How do you think that Britons should vote in the upcoming referendum? What do you think the results will be like?'
          },
          {
            name: 'BillS Kenney',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
            subtitle: 'Nothing acts as a better antidote for romance than young men and women doing geometry together at eight o clock every morning.'
          },
          {
            name: 'Brian Purkiss',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BrianPurkiss/128.jpg',
            subtitle: 'He used to get confused between soldiers and shoulders, but as a military man, he now soldiers responsibility.'
          },
          {
            name: 'Bryan Horsey',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BryanHorsey/128.jpg',
            subtitle: 'The traffic is heavy here, especially in the morning.'
          },
          {
            name: 'ruzinav',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ruzinav/128.jpg',
            subtitle: 'Car safety systems have come a long way, but he was out to prove they could be outsmarted.'
          },
          {
            name: 'brynn',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            subtitle: 'It is often said that the best way to learn a foreign language is to go to the country where it is spoken.'
          },
          {
            name: 'Skyhartman',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/Skyhartman/128.jpg',
            subtitle: 'Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all.'
          },
          {
            name: 'Isary Amairani',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/IsaryAmairani/128.jpg',
            subtitle: 'Red is greener than purple, for sure.'
          },
          {
            name: 'Karimmove',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/Karimmove/128.jpg',
            subtitle: 'Writing a list of random sentences is harder than I initially thought it would be.'
          },
        ]

    const NewList = [
          {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/jarjan/128.jpg',
            subtitle: 'I was told there is a difference between temper and temperament. How can one explain this difference?'
          },
          {
            name: 'adhamdannaway',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: '  I ll be going to Boston a few times this month for work.'
          },
          {
            name: 'AM_Kn2',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/AM_Kn2/128.jpg',
            subtitle: 'How do you think that Britons should vote in the upcoming referendum? What do you think the results will be like?'
          },
          {
            name: 'BillS Kenney',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
            subtitle: 'Nothing acts as a better antidote for romance than young men and women doing geometry together at eight o clock every morning.'
          },
          {
            name: 'Brian Purkiss',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BrianPurkiss/128.jpg',
            subtitle: 'He used to get confused between soldiers and shoulders, but as a military man, he now soldiers responsibility.'
          },
          {
            name: 'Bryan Horsey',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BryanHorsey/128.jpg',
            subtitle: 'The traffic is heavy here, especially in the morning.'
          },
          {
            name: 'ruzinav',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ruzinav/128.jpg',
            subtitle: 'Car safety systems have come a long way, but he was out to prove they could be outsmarted.'
          },
          {
            name: 'brynn',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            subtitle: 'It is often said that the best way to learn a foreign language is to go to the country where it is spoken.'
          },
          {
            name: 'Skyhartman',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/Skyhartman/128.jpg',
            subtitle: 'Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all.'
          },
          {
            name: 'Isary Amairani',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/IsaryAmairani/128.jpg',
            subtitle: 'Red is greener than purple, for sure.'
          },
          {
            name: 'Karimmove',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/Karimmove/128.jpg',
            subtitle: 'Writing a list of random sentences is harder than I initially thought it would be.'
          },
        ]

    const LikesList = [
          {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/jarjan/128.jpg',
            subtitle: 'I was told there is a difference between temper and temperament. How can one explain this difference?'
          },
          {
            name: 'adhamdannaway',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: '  I ll be going to Boston a few times this month for work.'
          },
          {
            name: 'AM_Kn2',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/AM_Kn2/128.jpg',
            subtitle: 'How do you think that Britons should vote in the upcoming referendum? What do you think the results will be like?'
          },
          {
            name: 'BillS Kenney',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
            subtitle: 'Nothing acts as a better antidote for romance than young men and women doing geometry together at eight o clock every morning.'
          },
          {
            name: 'Brian Purkiss',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BrianPurkiss/128.jpg',
            subtitle: 'He used to get confused between soldiers and shoulders, but as a military man, he now soldiers responsibility.'
          },
          {
            name: 'Bryan Horsey',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/BryanHorsey/128.jpg',
            subtitle: 'The traffic is heavy here, especially in the morning.'
          },
          {
            name: 'ruzinav',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ruzinav/128.jpg',
            subtitle: 'Car safety systems have come a long way, but he was out to prove they could be outsmarted.'
          },
          {
            name: 'brynn',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            subtitle: 'It is often said that the best way to learn a foreign language is to go to the country where it is spoken.'
          },
          {
            name: 'Skyhartman',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/Skyhartman/128.jpg',
            subtitle: 'Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all.'
          },
          {
            name: 'Isary Amairani',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/IsaryAmairani/128.jpg',
            subtitle: 'Red is greener than purple, for sure.'
          },
          {
            name: 'Karimmove',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/Karimmove/128.jpg',
            subtitle: 'Writing a list of random sentences is harder than I initially thought it would be.'
          },
        ]
