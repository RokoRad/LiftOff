import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles.js';
import { language } from '../../config/settings.js'

const InitalButton = (props) => (
  <TouchableOpacity onPress={() => (props.action)} opacity={0.8}>
    <View style={styles.wrapper}>
      <Text style={styles.inner}>{language[props.text]}</Text>
    </View>
  </TouchableOpacity>
);

export default InitalButton;