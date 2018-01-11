import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import signalr from 'react-native-signalr';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import { connection, proxy } from '../../functions/realtime';
import defaultList from '../../config/defaultList.js';
import Toast from 'react-native-simple-toast';
import language from '../../config/settings.js';

timeLocation = {
  location: {
    latitude: 13.5,
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
    AsyncStorage.getItem('@realtime').then((value) => {
      this.setState({
        list: JSON.parse(value)
      })
    });
    
    proxy.on('broadcastWeather', (value) => {
      AsyncStorage.setItem('@realtime', JSON.stringify(value)).then();
      this.setState({
        list: value
      })
    });

    connection.start().done(() => {
      proxy.invoke('initiateConnection', timeLocation, units);
    }).fail(() => {
      Toast.show(language.serverError);
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