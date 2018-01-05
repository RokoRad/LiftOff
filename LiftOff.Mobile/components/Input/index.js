import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles.js';

const types = {
  Name: require('../../images/user-nav.png'),
  Email: require('../../images/user-nav.png'),
  Password: require('../../images/user-nav.png')
}

const Input = (props) => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={types[props.type]} />
    <TextInput placeholder={props.type} style={styles.input} placeholderTextColor="#fff" />
  </View>
);

export default Input;