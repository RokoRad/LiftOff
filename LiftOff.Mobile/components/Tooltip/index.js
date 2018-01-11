import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const Tooltip = () => (
  <View style={styles.tooltip}>
    <Text style={styles.text}>Choose when</Text>
  </View>
);

export default Tooltip;