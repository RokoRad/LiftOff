import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import signalr from 'react-native-signalr';
import { broadcast } from '../../functions/realtime';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import defaultList from '../../config/defaultList.js';
import Toast from 'react-native-simple-toast';


const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
proxy = connection.createHubProxy('weatherHub'),
units = 'metric'

connection.logging = false;

// const initial = (object, units) => {
// proxy.invoke('initiateConnection', object, units);
// };

// const update = (location) => {
// proxy.invoke('updateLocation', location);
// };

// const setup = () => {
// //setInterval(function(){ console.log("kurac") }, 500);
// connection.start().done(() => {
// console.log("usa")
// proxy.invoke('initiateConnection', {
// location: {
//   latitude: 43.508133,
//   longitude: 16.440193
// },
// time: new Date().toISOString()
// }, units);
// console.log("prosa")
// }).fail(() => {
// console.log("server error")
// // server error
// });
// };

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      list: defaultList,
      loaded: false
    }
  };

  componentWillMount() {
    connection.start().done(() => {
      console.log("usa")
      proxy.invoke('initiateConnection', {
      location: {
        latitude: 43.508133,
        longitude: 16.440193
      },
      time: new Date().toISOString()
      }, units);
      console.log("prosa")
      }).fail(() => {
      console.log("server error")
      // server error
      });
      broadcast();
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