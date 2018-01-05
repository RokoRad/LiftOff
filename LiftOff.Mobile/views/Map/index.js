import React from 'react';
import { WebView  } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';

const Map = ({location}) => (
  <Screen current={location}>
    <WebView cacheEnabled={true} javaScriptEnabled={true} source={{uri: 'http://192.168.0.111:8080/'}} />
  </Screen>
);

export default Map;