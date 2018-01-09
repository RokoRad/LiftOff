import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import signalr from 'react-native-signalr';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/');
connection.logging = true;
const proxy = connection.createHubProxy('weatherHub');


proxy.on('broadcastWeather', (value) => {
  AsyncStorage.setItem('@realtime', JSON.stringify(value));
});

let timeLocation = {
  Location: {
    Latitude: 23,
    Longitude: 33
  },
  Time: JSON.stringify(new Date().toISOString())
};

let units = 'metric'

connection.start().done(() => {
  proxy.invoke('initiateConnection', timeLocation, units);
}).fail(() => {
  // error pri spajanju
});

// const Home = ({location}) => (
  // <Screen current={location}>
  //   <HomeRating string="Flight is safe, but watch out for sporadic gusts of wind. Although cloudy, precipitation is not expected." rating="4.7"/>
  //   <HomeList list="" />
  // </Screen>
// );

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      list: ''
    }
  };

  componentWillMount() {
    proxy.on('broadcastWeather', (value) => {
      this.setState({
        list: value
      })
    });
  }
 
  render() {
    return(
      <Screen current={location}>
        <HomeRating string="Flight is safe, but watch out for sporadic gusts of wind. Although cloudy, precipitation is not expected." rating="4.7"/>
        <HomeList list={this.state.list} />
      </Screen>
    );
  }
}

export default Home;