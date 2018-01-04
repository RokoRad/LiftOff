import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles.js';
import Navigation from '../Navigation';

// view ima screen sa prikazom contenta i navigacije
const Screen = (props) => (
    <View {...props} style={styles.screen}>
      <StatusBar hidden={true} />
      {props.children}
      <Navigation current={props.current} />
    </View>
);

export default Screen;