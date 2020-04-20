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
        
    const NewList = [
          {
            name: 'jarjan',
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
    
    const TrendingList = [
          {
            name: 'kurafire',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg',
            subtitle: 'What can be added to the happiness of a man who is in health, out of debt, and has a clear conscience?'
          },
          {
            name: 'moscoz',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg',
            subtitle: 'Love is above money. The latter cant give as much happiness as the former.'
          },
          {
            name: '91bilal',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/91bilal/128.jpg',
            subtitle: 'Seek success, but always be prepared for random cats.'
          },
          {
            name: 'igorgarybaldi',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg',
            subtitle: 'The fact that theres a stairway to heaven and a highway to hell explains life well.'
          },
          {
            name: 'calebogden',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
            subtitle: 'The quick brown fox jumps over the lazy dog.'
          },
          {
            name: 'joelhelin',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg',
            subtitle: 'I may struggle with geography, but Im sure Im somewhere around here.'
          },
          {
            name: 'kushsolitary',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kushsolitary/128.jpg',
            subtitle: 'Those who look outward dream, but those who look inward awaken.'
          },
          {
            name: 'coreyweb',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/coreyweb/128.jpg',
            subtitle: 'I can translate from German to English pretty well, but the other way around is more difficult.'
          },
          {
            name: 'snowshade',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/snowshade/128.jpg',
            subtitle: 'If a student and his or her professor bore each other, then both are wasting their time.'
          },
          {
            name: 'areus',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/areus/128.jpg',
            subtitle: 'Dont step on the broken glass.'
          },
          {
            name: 'holdenweb',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg',
            subtitle: 'Ferrari is the only company that has raced every season of formula one since the series began in 1950.'
          },
        ]


    const LikesList = [
          {
            name: 'unterdreht',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/unterdreht/128.jpg',
            subtitle: 'The sky is clear the stars are twinkling.'
          },
          {
            name: 'heyimjuani',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/heyimjuani/128.jpg',
            subtitle: '  I ll be going to Boston a few times this month for work.'
          },
          {
            name: 'collegeman',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/collegeman/128.jpg',
            subtitle: 'Going from child, to childish, to childlike is only a matter of time.'
          },
          {
            name: 'peejfancher',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/peejfancher/128.jpg',
            subtitle: 'His mind was blown that there was nothing in space except space itself.'
          },
          {
            name: 'andyisonline',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyisonline/128.jpg',
            subtitle: 'My Mum tries to be cool by saying that she likes all the same things that I do.'
          },
          {
            name: 'ateneupopular',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ateneupopular/128.jpg',
            subtitle: 'Stop waiting for exceptional things to just happen.'
          },
          {
            name: 'ahmetalpbalkan',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ahmetalpbalkan/128.jpg',
            subtitle: 'Never underestimate the willingness of the greedy to throw you under the bus.'
          },
          {
            name: 'Stievius',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/Stievius/128.jpg',
            subtitle: 'Everyone says they love nature until they realize how dangerous she can be.'
          },
          {
            name: 'kerem',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kerem/128.jpg',
            subtitle: 'He wore the surgical mask in public not to keep from catching a virus, but to keep people away from him.'
          },
          {
            name: 'osvaldas',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/osvaldas/128.jpg',
            subtitle: 'It had been sixteen days since the zombies first attacked.'
          },
          {
            name: 'angelceballos',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg',
            subtitle: 'You re good at English when you know the difference between a man eating chicken and a man-eating chicken.'
          },
        ]
