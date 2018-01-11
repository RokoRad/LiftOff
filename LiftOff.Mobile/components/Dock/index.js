import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Calibration from '../../components/Calibration';
import Picker from '../../components/Picker';
import styles from './styles.js';

class Dock extends Component {
  constructor() {
    super();
    this.state = {
      date: 0
    }
  }

  getDate(value) {
    this.setState({
      date: value
    });
    console.log(this.state.date)
  }

  render() {
    return(
      <View style={styles.dock}>
        <Calibration />
        <Picker date={this.getDate()} />
      </View> 
    )
  }
}

export default Dock;