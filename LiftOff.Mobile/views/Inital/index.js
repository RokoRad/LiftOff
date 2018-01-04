import React from 'react';
import { View } from 'react-native';
import styles from './styles.js';

// view ima screen sa prikazom contenta sa logina i registracije
const Inital = (props) => (
  <View>
    <View {...props} style={styles.screen}>
      {props.children}
    </View>
  </View>
);

export default Inital;