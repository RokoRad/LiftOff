import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles.js';

const Input = (props) => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={require('../../images/user-icon.png')} />
    <TextInput placeholder="test" style={styles.input} placeholderTextColor="#ccc" />
  </View>
);

export default Input;