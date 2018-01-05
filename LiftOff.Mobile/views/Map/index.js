import React from 'react';
import { WebView  } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';

const Map = ({location}) => (
  <Screen current={location}>
    <WebView source={{uri: 'http://192.168.1.104:3000/'}} />
  </Screen>
);

export default Map;