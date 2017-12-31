import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
//import { language } from '../../config/settings.js';

const NavigationItem = (props) => (
  <View style={styles.navigationItem}>
    <Text style={styles.navigationItemIcon}>{props.icon}</Text>
    <Text style={styles.navigationItemText}>{props.text}</Text>
  </View>
);

export default NavigationItem;