import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import globals from '../../config/styles.js';
import Screen from '../../components/Screen';
import SafetyscoreStopwatch from '../../components/SafetyscoreStopwatch';
import StopwatchElement from '../../components/StopwatchElement';
import StopwatchLogs from '../../components/StopwatchLogs';
import round from '../../functions/round';

import lang from 'react-native-i18n';
// za enn-US i en-GB postavlja en kao default
lang.fallbacks = true;
// // instnciranje lokalizacije
lang.translations = {
  en: {
    comment: 'Fetching newest data',
    flightRating: 'Flight rating:'
  },
  hr: {
    commment: 'Učitavam najnovije podatke',
    flightRating: 'Ocjena leta:'
  }
}

const data = [
  {id: 1, active: true, location: 'Čavoglave, Croatia', time: '22:10', rating: 2},
  {id: 2, active: false, location: 'Čavoglave, Croatia', time: '12:10', rating: 3},
  {id: 3, active: false, location: 'Čavoglave, Croatia', time: '07:10', rating: 2},
  {id: 4, active: true, location: 'Čavoglave, Croatia', time: '22:10', rating: 0},
  {id: 5, active: false, location: 'Čavoglave, Croatia', time: '12:10', rating: 5},
  {id: 6, active: false, location: 'Čavoglave, Croatia', time: '07:10', rating: 4}
];

const holder = {
  timeFlown: 69,
  flySafeScore: 2.2,
  drone: {
    name: 'Dron 1'
  },
  flightLocation: {
    flightSpot: 'Split',
    latitude: 43.508133,
    longitude: 16.440193
  },
  flightTime: {
    flightStartTime: new Date().toISOString()
  }
};

class Stopwatch extends Component {
  constructor() {
     super();
     this.state = {
        active: false,
        seconds: 0,
        minutes: 0,
        startTime: 0,
        rating: '/',
        comment: {
          en: 'Fetching newest data..',
          hr: 'Dohvaćanje najnovijih podataka..'
        }
     };
  };

  componentWillMount() {
    AsyncStorage.getItem('@realtime').then((value) => {
      let parse = JSON.parse(value);
      this.setState({
        rating: round(parse.TotalRating),
        comment: {
          en: parse.AdvisoryRating.English,
          hr: parse.AdvisoryRating.Croatian
        }
      })
    });
  }


  bind = () => {
    if(this.state.active) {
      AsyncStorage.getItem('@token').then((value) => {
        fetch('http://liftoffapi.azurewebsites.net/api/logging/logFlight', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + value,
            'Content-type': 'application/json'
          },
          body: JSON.stringify(holder)
        }).then((response) => {
          if(response.status === 200) {
            AsyncStorage.removeItem('@stats');
            AsyncStorage.setItem('@stats', JSON.stringify(response));
          } else if (response.status === 401) {

          } else {

          }});
      });
      clearInterval(this.raise);
      this.setState({
        minutes: 0,
        seconds: 0,
        startTime: 0
      })
    } else {
      this.setState({
        startTime: new Date().toISOString()
      });
      this.raise = setInterval(() => {
        if(this.state.seconds === 61) {
          this.setState({
            minutes: this.state.minutes+=1,
            seconds: 0
          });
          console.log(this.state.seconds)
        } else {
          this.setState({
            seconds: this.state.seconds+=1
          });
          console.log(this.state.seconds)
        }
      }, 1000);
    }
    this.setState({
      active: !this.state.active
    });
  }

  render() {
      return (
        <Screen current={this.props.location}>
          <SafetyscoreStopwatch title={lang.t('flightRating')} comment={this.state.comment.en} rating={this.state.rating} />
          <StopwatchElement minutes={this.state.minutes} seconds={this.state.seconds} />
          <TouchableOpacity activeOpacity={0.9} onPress={this.bind} style={[globals.buttonWrapper, {backgroundColor: '#2980b9'}]}>
            <Text style={globals.buttonInner}>
              {
                this.state.active === true 
                ? 'Land'
                : 'LiftOff'
              }
            </Text>
          </TouchableOpacity>
          <StopwatchLogs data={data} />
        </Screen>  
      );
  }
}


export default Stopwatch;