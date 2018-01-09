import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import signalr from 'react-native-signalr';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import { connection, proxy, timeLocation, units } from '../../functions/realtime';
import defaultList from '../../config/defaultList.js';
import Toast from 'react-native-simple-toast';
import language from '../../config/settings.js';

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

    connection.start().done(() => {
      proxy.invoke('initiateConnection', timeLocation, units);
    }).fail(() => {
      // error pri spajanju
    });
  }
 
  render() {
    return(
      <Screen current={this.props.location}>
        <HomeRating string="Flight is safe, but watch out for sporadic gusts of wind. Although cloudy, precipitation is not expected." rating={this.state.list.TotalRating} />
        <HomeList list={this.state.list} />
      </Screen>
    );
  }
}

export default Home;