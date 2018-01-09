import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import signalr from 'react-native-signalr';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import proxy from '../../functions/realtime';
import defaultList from '../../config/defaultList.js';

// const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/');
// connection.logging = true;
// const proxy = connection.createHubProxy('weatherHub');


// proxy.on('broadcastWeather', (value) => {
//   AsyncStorage.setItem('@realtime', JSON.stringify(value));
// });

// let timeLocation = {
//   Location: {
//     Latitude: 23,
//     Longitude: 33
//   },
//   Time: new Date()
// };

// let units = 'metric'

// connection.start().done(() => {
//   proxy.invoke('initiateConnection', timeLocation, units);
// }).fail(() => {
//   // error pri spajanju
// });

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      list: defaultList
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
      <Screen current={this.props.location}>
        <HomeRating string="Flight is safe, but watch out for sporadic gusts of wind. Although cloudy, precipitation is not expected." rating="3"
        //rating={this.state.list.TotalRating} 
        />
        <HomeList list={this.state.list} />
      </Screen>
    );
  }
}

export default Home;