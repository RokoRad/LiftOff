import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import signalr from 'react-native-signalr';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import defaultList from '../../config/defaultList.js';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';

const connection = signalr.hubConnection('http://liftoffapi.azurewebsites.net/signalr'),
      proxy = connection.createHubProxy('weatherHub'),
      units = 'metric';

class Home extends React.Component {
  constructor(props) {
    super(props);
  };

  async _stopConnection() {
    connection.stop();
  }

  async _invoke(object, units) {
    proxy.invoke('initiateConnection', object, units);
  }

  componentDidMount() {
    proxy.on('broadcastWeather', (response) => {
      // this.setState({
      //   list: response
      // });
      //AsyncStorage.setItem('@realtime', JSON.stringify(response));
      console.log(response)
    });
  }

  componentWillMount() {
    connection.start().done(() => {
      this._invoke(this.props.timeLocation, units);
    }).fail(() => {
      // puka server
    });

    // AsyncStorage.getItem('@timeLocation').then((storage) => {
    //   connection.start().done(() => {
    //     if(storage) {
    //       const value = JSON.parse(storage);
    //       const data = {
    //         location: {
    //           longitude: value.location.longitude,
    //           latitude: value.location.latitude
    //         },
    //         //time: value.time
    //         time: new Date().toISOString()
    //       }
    //       this._invoke(data, units);
    //     } else {
    //       const data = {
    //         // default lokacija
    //         location: {
    //           longitude: 3,
    //           latitude: 3
    //         },
    //         time: new Date().toISOString()
    //       }
    //       this._invoke(data, units);
    //     }
    //   }).fail(() => {
    //     // puka server
    //   });
    // });
  }

  componentWillUnmount() {
    this._stopConnection();
  }

  render() {
    console.log(this.props.timeLocation)
    return(
      <Screen current={this.props.location}>
        {/* <HomeRating string={this.state.list.AdvisoryRating} rating={this.state.list.TotalRating} />
        <HomeList list={this.state.list} /> */}
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  ...state.timeLocationReducer
});

export default connect(mapStateToProps)(Home);