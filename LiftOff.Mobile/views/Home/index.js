import React from 'react';
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
  Time: '2018-01-09T12:53:51+01:00'
};

let units = 'metric'

connection.start().done(() => {
  proxy.invoke('initiateConnection', timeLocation, units);
}).fail(() => {
  // error pri spajanju
});



const Home = ({location}) => (
  <Screen current={location}>
    <HomeRating string="Flight is safe, but watch out for sporadic gusts of wind. Although cloudy, precipitation is not expected." rating="4.7"/>
    <HomeList list={AsyncStorage.getItem('@realtime').then((value) => value).catch((error) => (error))} />
  </Screen>
);

export default Home;