import React from 'react';
import { WebView  } from 'react-native';
import styles from './styles.js';
import Screen from '../../components/Screen';

const local = '../../../LiftOff.Map/index.html';

const Map = ({location}) => (
  <Screen current={location}>
    <WebView 
    cacheEnabled={true} 
    javaScriptEnabled={true}
    source={{uri: 'http://192.168.1.104:8080/'}}
    //source={{uri: local}}
    domStorageEnabled={true}
    onLoadStart={console.log("started")}
    onLoadEnd={console.log("ended")} />
  </Screen>
);

export default Map;