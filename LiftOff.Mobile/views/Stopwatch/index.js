import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import globals from '../../config/styles.js';
import Screen from '../../components/Screen';
import SafetyscoreStopwatch from '../../components/SafetyscoreStopwatch';
import StopwatchElement from '../../components/StopwatchElement';
import StopwatchLogs from '../../components/StopwatchLogs';
import round from '../../functions/round';
import _stopwatch from './_stopwatch.js';
import _buttonText from './_buttonText.js';
import { connect } from 'react-redux';

class Stopwatch extends Component {
  constructor(props) {
     super(props);
  };

  render() {
    console.log(this.props.logs)
    //console.log(this.props.home)
      return (
        <Screen current={this.props.location}>
          <SafetyscoreStopwatch comment={this.props.home.AdvisoryRating} rating={this.props.home.TotalRating} />
          <StopwatchElement minutes={this.props.stopwatch.minutes} seconds={this.props.stopwatch.seconds} />
          <TouchableOpacity activeOpacity={0.9} onPress={() => _stopwatch()} style={[globals.buttonWrapper, {backgroundColor: '#2980b9'}]}>
            <Text style={globals.buttonInner}>{_buttonText(this.props.stopwatch.active)}</Text>
          </TouchableOpacity>
          <StopwatchLogs data={this.props.logs} />
        </Screen>  
      );
  }
}


const mapStateToProps = state => ({
  ...state.stopwatchReducer,
  ...state.logsReducer,
  ...state.homeReducer
});

export default connect(mapStateToProps)(Stopwatch);