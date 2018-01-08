import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globals from '../../config/styles.js';
import Screen from '../../components/Screen';
import SafetyscoreStopwatch from '../../components/SafetyscoreStopwatch';
import StopwatchElement from '../../components/StopwatchElement';
import StopwatchLogs from '../../components/StopwatchLogs';
import { language } from '../../config/settings.js';

const data = [
  {id: 1, active: true, location: 'Čavoglave, Croatia', time: '22:10'},
  {id: 2, active: false, location: 'Čavoglave, Croatia', time: '12:10'},
  {id: 3, active: false, location: 'Čavoglave, Croatia', time: '07:10'},
  {id: 4, active: true, location: 'Čavoglave, Croatia', time: '22:10'},
  {id: 5, active: false, location: 'Čavoglave, Croatia', time: '12:10'},
  {id: 6, active: false, location: 'Čavoglave, Croatia', time: '07:10'}
];

const holder = {};

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
      }, 1000);
    } else {
      this.setState({
        seconds: 0,
        minutes: 0
      });
      holder = null;
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
          <TouchableOpacity onPress={this.bind} style={[globals.buttonWrapper, {backgroundColor: '#2980b9'}]}>
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