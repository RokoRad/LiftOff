import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';
import SafetyscoreStopwatch from '../../components/SafetyscoreStopwatch';
import StopwatchElement from '../../components/StopwatchElement';
import StopwatchInformation from '../../components/StopwatchInformation';


import storage from '../../functions/storage';



// var myVar = setInterval(function(){ myTimer() }, 1000);

// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementById("demo").innerHTML = t;
// }

// function myStopFunction() {
//     clearInterval(myVar);
// }


let seconds;
let old;
let started = false;
let interval;

function bind() {
  if(started) {
    old = seconds;
    seconds = new Date().getTime() / 1000;
    clearInterval(interval);
    started = false;
    seconds = 0;
  } else {
    seconds = new Date().getTime() / 1000;
    interval = setInterval(function() {
      console.log("a");
    }, 1000);
    started = true;
  }
}

// function bind() {
//   if(started) {
//     console.log(seconds);
//     seconds = 0;
//     startd = false;
//   } else {
//     started = true;
//     setInterval(function() {
//       seconds++;
//     }, 1000);
//   }
// }

// var refreshIntervalId = setInterval(fname, 10000);

// /* later */
// clearInterval(refreshIntervalId);


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