import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';
import styles from './styles.js';

const InitalButton = (props) => (
  <TouchableWithoutFeedback onPress={() => (props.action)}>
    <View style={styles.wrapper}>
      <Text style={styles.inner}>{props.text}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default InitalButton;