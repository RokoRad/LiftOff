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
  Time: new Date()
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
      list: {
        AtmosphereRating: 3.9017599873536,
        ConditionsRating: 5,
        TemperatureRating: 4.203419248287,
        TotalRating: 4.50418331174321,
        UVRating: 2.742936502,
        VisibilityRating: null,
        WindRating: 4.543835536772511,
        weatherData: {
          Cloudiness: 0,
          Humidity: 52,
          Max_Temperature: 15.03,
          Min_Temperature: 15.03,
          Presssure: 1004.53,
          Temperature: 15.03,
          TimeLocation: {
            Location: {
              Latitude: 23,
              Longitude: 33,
            },
            Time: "2018-01-09T19:26:18.4557311+00:00",
          },
          UVIndex: 5.5,
          Units: "metric",
          Visibility: null,
          Weather: "Clear",
          WeatherDescription: "clear sky",
          WeatherID: 800,
          WindDirection: 44.0012,
          WindSpeed: 4.12,
        },
      }
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