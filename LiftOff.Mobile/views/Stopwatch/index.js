import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import Screen from '../../components/Screen';
import Button from '../../components/Button';
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
  }

  render() {
    return (
      <Screen current={this.props.location}>
        <SafetyscoreStopwatch
          comment={this.props.home.AdvisoryRating}
          rating={this.props.home.TotalRating}
        />
        <StopwatchElement
          minutes={this.props.stopwatch.minutes}
          seconds={this.props.stopwatch.seconds}
          extended={this.props.logs.length}
        />
        <Button
          onPress={() => _stopwatch(this.props.history)}
          type={this.props.stopwatch.active ? 'Land' : 'Liftoff'}
        />
        <StopwatchLogs data={this.props.logs} hidden={this.props.logs.length} />
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
