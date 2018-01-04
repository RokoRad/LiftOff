import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';
import SafetyscoreStopwatch from '../../components/SafetyscoreStopwatch';
import StopwatchElement from '../../components/StopwatchElement';
import StopwatchInformation from '../../components/StopwatchInformation';
import { language } from '../../config/settings.js';

let seconds = 0,
  minutes = 0,
  current = 0,
  old = 0,
  interval,
  started = false;

function bind() {
  if(started) {
    old = current;
    current = new Date().getTime() / 1000;
    clearInterval(interval);
    started = false;
  } else {
    current = 0;
    seconds = 0;
    minutes = 0;
    current = new Date().getTime() / 1000;
    interval = setInterval(function() {
      seconds++;
      if(seconds === 61) {
        minutes++;
        seconds = 0;
      }
    }, 1000);
    started = true;
  }
}

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'minutes': minutes,
      'seconds': seconds
    };
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        'minutes': minutes,
        'seconds': seconds
      })
    }, 1000)
  }

  render() {
    return (
      <Screen current={this.props.location} style={styles.vertical}>
        <SafetyscoreStopwatch />
        <StopwatchElement minutes={this.state.minutes} seconds={this.state.seconds} />
        <StopwatchInformation minutes={30-minutes} />
        <TouchableOpacity onPress={() => bind()} style={styles.starter}>
          <Text style={styles.starterText}>
            {
              started === true 
              ? 'Land'
              : 'LiftOff'
            }
          </Text>
        </TouchableOpacity>
      </Screen>
    );
  }
}

export default Stopwatch;