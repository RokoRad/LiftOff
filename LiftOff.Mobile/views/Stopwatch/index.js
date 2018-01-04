import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';
import SafetyscoreStopwatch from '../../components/SafetyscoreStopwatch';
import StopwatchElement from '../../components/StopwatchElement';
import StopwatchInformation from '../../components/StopwatchInformation';


import storage from '../../functions/storage';

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
    current = 0;
    seconds = 0;
    minutes = 0;
  } else {
    current = new Date().getTime() / 1000;
    interval = setInterval(function() {
      seconds++;
      if(seconds === 61) {
        minutes++;
        seconds = 0;
      }
      console.log(seconds);
      console.log("m" + minutes);
    }, 1000);
    started = true;
  }
}

const Stopwatch = ({location}) => (
  <Screen current={location} style={styles.vertical}>
    <SafetyscoreStopwatch />
    <StopwatchElement minutes="22" seconds="33" />
    <StopwatchInformation battery="0.3" />
    <TouchableOpacity onPress={() => (bind())}>
      <Text style={{padding:10, backgroundColor: 'red'}}>hehe</Text>
    </TouchableOpacity>
  </Screen>
);

export default Stopwatch;