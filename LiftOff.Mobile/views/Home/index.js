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

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      list: defaultList,
      loaded: false
    }
  };

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
          let parsed = JSON.parse(value);
          proxy.invoke('initiateConnection', {
            location: {
              latitude: parsed.location.latitude,
              longitude: parsed.location.longitude
            },
            time: new Date().toISOString()
          }, units);
          proxy.invoke('updateLocation', {
            location: {
              latitude: parsed.location.latitude,
              longitude: parsed.location.longitude
            },
            time: new Date().toISOString()
          }, units);
        } else {
          proxy.invoke('initiateConnection', {
            location: {
              latitude: 43.55,
              longitude: 16.5
            },
            time: new Date().toISOString()
          }, units);
        }
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