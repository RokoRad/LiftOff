import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import Navigation from '../Navigation';

// view ima screen sa prikazom contenta i navigacije
const Screen = (props) => (
    <View {...props} style={styles.screen}>
      {this.children}
      <Navigation current={props.current} />
    </View>
);

export default Screen;