import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import globals from '../../config/styles.js';
import Screen from '../../components/Screen';
import SafetyscoreStopwatch from '../../components/SafetyscoreStopwatch';
import StopwatchElement from '../../components/StopwatchElement';
import StopwatchLogs from '../../components/StopwatchLogs';
import { language } from '../../config/settings.js';

class Stopwatch extends Component {
  constructor() {
     super();
     this.state = {
        active: false,
        seconds: 0,
        minutes: 0
     };
  };

  bind = () => {
    var temp;
    if(this.state.active === false) {
      this.setState({
        seconds: 0,
        minutes: 0
      });
      temp = setInterval(() => {
        this.setState({
          seconds: this.state.seconds+=1
        });
        if(this.state.seconds == 61) {
          this.setState({
            seconds: 0,
            minutes: this.state.minutes+=1,
          });
        }
        console.log(this.state.seconds);
      }, 1000);
    } else {
      for(let i = 100; i<900; i++) {
        clearInterval(i);
      }
    }
    this.setState({
      active: !this.state.active
    });
  };

  render() {
      return (
        <Screen current={this.props.location}>
          <SafetyscoreStopwatch rating="3.7"/>
          <StopwatchElement minutes={this.state.minutes} seconds={this.state.seconds} />
          <TouchableOpacity onPress={this.bind} style={[globals.buttonWrapper, styles.starter]}>
            <Text style={globals.buttonInner}>
              {
                this.state.active === true 
                ? 'Land'
                : 'LiftOff'
              }
            </Text>
          </TouchableOpacity>
          <StopwatchLogs />
        </Screen>  
      );
  }
}


export default Stopwatch;