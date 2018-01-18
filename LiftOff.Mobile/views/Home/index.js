import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import signalr from 'react-native-signalr';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import defaultList from '../../config/defaultList.js';
import Toast from 'react-native-simple-toast';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
      proxy = connection.createHubProxy('weatherHub'),
      units = 'metric';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      list: defaultList,
      loaded: false
    }
  };

  async _stopConnection() {
    connection.stop(() => {
      console.log("stopped")
    });
    console.log("aaaaa")
  }

  async _invoke(object, units) {
    proxy.invoke('initiateConnection', object, units);
    console.log("invoked")
    console.log(object)
  }

  componentDidMount() {
    proxy.on('broadcastWeather', (response) => {
      this.setState({list: response})
      console.log(response)
    });
  }

  componentWillMount() {
    AsyncStorage.getItem('@timeLocation').then((storage) => {
      connection.start().done(() => {
        if(storage) {
          const value = JSON.parse(storage);
          const data = {
            location: {
              longitude: value.location.longitude,
              latitude: value.location.latitude
            },
            //time: value.time
            time: new Date().toISOString()
          }
          this._invoke(data, units);
          console.log("has")
        } else {
          const data = {
            location: {
              longitude: 3,
              latitude: 3
            },
            time: new Date().toISOString()
          }
          this._invoke(data, units);
          console.log("empty")
        }
      }).fail(() => {
        console.log("error")
        // puka server
      });
    });
  }

  componentWillUnmount() {
    this._stopConnection();
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