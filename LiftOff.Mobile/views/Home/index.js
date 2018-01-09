import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import signalr from 'react-native-signalr';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
// import { proxy, timeLocation, units } from '../../functions/realtime';
import defaultList from '../../config/defaultList.js';
import Toast from 'react-native-simple-toast';
import language from '../../config/settings.js';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/'),
      proxy = connection.createHubProxy('weatherHub');
connection.logging = true;

const timeLocation = {
  Location: {
    Latitude: 43.508133,
    Longitutde: 16.440193
  },
  Time: new Date()
}
let units = 'metric';

connection.start().done(() => {
  proxy.invoke('initiateConnection', timeLocation, units);
}).fail(() => {
  Toast.show(language.serverError);
});


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      list: defaultList
    }
  };

  componentWillMount() {
    proxy.on('broadcastWeather', (value) => {
      console.log(value)
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