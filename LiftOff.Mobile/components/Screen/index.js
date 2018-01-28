import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import Navigation from '../Navigation';

// view ima screen sa prikazom contenta i navigacije
export default props => (
  <View>
    <View {...props} style={styles.screen}>
      {props.children}
      <Navigation current={props.current} />
    </View>
  </View>
);
