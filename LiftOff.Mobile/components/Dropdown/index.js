import React, { Component } from 'react';
import { Picker } from 'react-native';
import _changeDrone from './_changeDrone.js';
import { connect } from 'react-redux';
import styles from './styles.js';

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.drone)
    return ( 
      <Picker selectedValue={this.props.drone} onValueChange={(drone) => _changeDrone(drone)} style={styles.picker}>
        <Picker.Item label="DJI Phantom 4 Pro" value="DJI Phantom 4 Pro" />
        <Picker.Item label="DJI Phantom 4 Advanced" value="DJI Phantom 4 Advanced" />
        <Picker.Item label="DJI Phantom 3 SE" value="DJI Phantom 3 SE" />
        <Picker.Item label="DJI Mavic Air" value="DJI Mavic Air" />
        <Picker.Item label="DJI Mavic Pro" value="DJI Mavic Pro" />
        <Picker.Item label="DJI Spark" value="DJI Spark" />
        <Picker.Item label="Yuneec Typhoon H Pro" value="Yuneec Typhoon H pro" />
      </Picker>
    )
  }
}

const mapStateToProps = state => ({
  ...state.timeLocationReducer,
  ...state.homeReducer
});

export default connect(mapStateToProps)(Dropdown);