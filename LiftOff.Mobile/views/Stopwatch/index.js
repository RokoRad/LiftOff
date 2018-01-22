import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import globals from '../../config/styles.js';
import Screen from '../../components/Screen';
import SafetyscoreStopwatch from '../../components/SafetyscoreStopwatch';
import StopwatchElement from '../../components/StopwatchElement';
import StopwatchLogs from '../../components/StopwatchLogs';
import round from '../../functions/round';
import _stopwatch from './_stopwatch.js';
import { connect } from 'react-redux';
import store from '../../store';

const data = [
  {id: 1, active: true, location: 'Split, Croatia', time: '22:10', rating: 2},
  {id: 2, active: false, location: 'Split, Croatia', time: '12:10', rating: 3},
  {id: 3, active: false, location: 'Split, Croatia', time: '07:10', rating: 2},
  {id: 4, active: true, location: 'Split, Croatia', time: '22:10', rating: 0},
  {id: 5, active: false, location: 'Split, Croatia', time: '12:10', rating: 5}
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
  constructor(props) {
     super(props);
  };

  render() {
      return (
        <Screen current={this.props.location}>
          <SafetyscoreStopwatch title="lang.en.title" comment="lang.en.message" rating="2.2" />
          <StopwatchElement minutes={this.props.stopwatch.minutes} seconds={this.props.stopwatch.seconds} />
          <TouchableOpacity activeOpacity={0.9} onPress={() => _stopwatch()} style={[globals.buttonWrapper, {backgroundColor: '#2980b9'}]}>
            <Text style={globals.buttonInner}>
              {
                this.props.stopwatch.active === true 
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


const mapStateToProps = state => ({
  ...state.stopwatchReducer
});

export default connect(mapStateToProps)(Stopwatch);