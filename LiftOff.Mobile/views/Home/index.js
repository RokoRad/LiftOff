import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import signalr from 'react-native-signalr';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import defaultList from '../../config/defaultList.js';
import Toast from 'react-native-simple-toast';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
      proxy = connection.createHubProxy('weatherHub');
      connection.logging = false,
      units = 'metric'

timeLocation = {
  location: {
    latitude: 26.5,
    longitude: 26.4
  },
  time: new Date()
};
units = 'metric'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      list: defaultList
    }
  };
  // 21:36:28: Object {
  //   21:36:28:   "location": Object {
  //   21:36:28:     "latitude": 43.555257836389536,
  //   21:36:28:     "latitudeDelta": 0.1,
  //   21:36:28:     "longitude": 16.51057731360197,
  //   21:36:28:     "longitudeDelta": 0.1,
  //   21:36:28:   },
  //   21:36:28:   "time": "\"2018-01-18-01-09\"",
  //   21:36:28: }
  //   21:36:28: Object {
  //   21:36:28:   "location": Object {
  //   21:36:28:     "latitude": 26.5,
  //   21:36:28:     "longitude": 26.4,
  //   21:36:28:   },
  //   21:36:28:   "time": 2018-01-15T20:36:25.608Z,
  //   21:36:28: }
    
  componentWillMount() {
    AsyncStorage.getItem('@timeLocation').then((value) => {
      proxy.on('broadcastWeather', (response) => {
        AsyncStorage.setItem('@realtime', JSON.stringify(response)).then();
        this.setState({
          list: response
        })
      }); 
      connection.start().done(() => {
        if(value !== null) {
          proxy.invoke('initiateConnection', {
            location: {
              latitude: JSON.parse(value.location.latitude),
              longitude: JSON.parse(value.location.longitude)
            },
            time: JSON.parse(value.time)
          }, units);
        } else {
          proxy.invoke('initiateConnection', timeLocation, units);
        }
          proxy.invoke('initiateConnection', timeLocation, units);
      }).fail(() => {
        AsyncStorage.getItem('@realtime').then((cache) => {
          this.setState({
            list: JSON.parse(cache)
          });
        });
        Toast.show("Server error");
      });
    });
  }
  
  render() {
    return(
      <Screen current={this.props.location}>
        <HomeRating string={this.state.list.AdvisoryRating} rating={this.state.list.TotalRating} />
        <HomeList list={this.state.list} />
      </Screen>
    );
  }
}

export default Home;