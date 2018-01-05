import React from 'react';
import { WebView  } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';

const Map = ({location}) => (
  <Screen current={location}>
    <WebView source={{uri: 'https://www.google.hr/maps'}} />
  </Screen>
);

export default Map;