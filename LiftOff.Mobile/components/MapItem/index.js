import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styles.js';

const MapItem = (props) => (
  <View style={[styles.item, {bottom: props.order*60}]}></View>
);

export default MapItem;