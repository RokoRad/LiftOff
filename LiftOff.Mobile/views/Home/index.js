import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connection, proxy, update } from '../../functions/realtime';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import defaultList from '../../config/defaultList.js';
import Toast from 'react-native-simple-toast';

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
          update({
            location: {
              latitude: parsed.location.latitude,
              longitude: parsed.location.longitude
            }            
          })
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