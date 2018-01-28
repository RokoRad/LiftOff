import React, { Component } from 'react';
import { Picker } from 'react-native';
import styles from './styles.js';

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <Picker selectedValue="DJI_Spark" onValueVhange={() => console.log("aa")} style={styles.picker}>
        <Picker.Item label="DJI Phantom 4 Pro" value="DJI_Phantom_4_Pro" />
        <Picker.Item label="DJI Phantom 4 Advanced" value="DJI_Phantom_4_Advanced" />
        <Picker.Item label="DJI Phantom 3 SE" value="DJI_Phantom_3_SE" />
        <Picker.Item label="DJI Mavic Air" value="DJI_Mavic_Air" />
        <Picker.Item label="DJI Mavic Pro" value="DJI_Mavic_Pro" />
        <Picker.Item label="DJI Spark" value="DJI_Spark" />
        <Picker.Item label="Yuneec Typhoon H Pro" value="Yuneec_Typhoon_H_pro" />
      </Picker>
    )
  }
}