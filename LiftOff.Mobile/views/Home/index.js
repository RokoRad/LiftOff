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

  componentWillMount() {
    AsyncStorage.getItem('@timeLocation').then((value) => {
      proxy.on('broadcastWeather', (response) => {
        AsyncStorage.setItem('@realtime', JSON.stringify(response)).then();
        this.setState({
          list: response
        })
      }); 
      connection.start().done(() => {
          proxy.invoke('initiateConnection', timeLocation, units);
      }).fail(() => {
        Toast.show("Server error");
      });
    });



    // proxy.on('broadcastWeather', (response) => {
    //   AsyncStorage.setItem('@realtime', JSON.stringify(response)).then();
    //   this.setState({
    //     list: response
    //   })
    // });


    // connection.start().done(() => {
    //     proxy.invoke('initiateConnection', timeLocation, units);
    // }).fail(() => {
    //   Toast.show("Server error");
    // });

    // AsyncStorage.getItem('@realtime').then((value) => {
    //   this.setState({
    //     list: JSON.parse(value)
    //   });
    // });

  //   AsyncStorage.getItem('@timeLocation').then((value) => {
  //     connection.start().done(() => {
  //       if(value === null) {
  //         console.log(timeLocation)
  //         proxy.invoke('initiateConnection', timeLocation, units);
  //       } else {
  //         console.log(JSON.parse(value))
  //         const parsed = JSON.parse(value)
  //         proxy.invoke('initiateConnection', parsed, units);
  //       }
  //     }).fail(() => {
  //       Toast.show("Server error");
  //     });
  //   })
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