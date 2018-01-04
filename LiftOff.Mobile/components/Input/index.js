import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles.js';

const Input = (props) => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={require('../../images/user-nav.png')} />
    <TextInput placeholder="test" style={styles.input} placeholderTextColor="#fff" />
  </View>
);

export default Input;