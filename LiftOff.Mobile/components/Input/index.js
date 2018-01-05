import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles.js';
import values from '../../functions/values';

const types = {
  Name: require('../../images/user-nav.png'),
  Email: require('../../images/email-icon.png'),
  Password: require('../../images/password-icon.png')
};

const Input = (props) => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={types[props.type]} />
    <TextInput placeholder={props.type} style={styles.input} placeholderTextColor="#fff" secureTextEntry={props.type === 'Password' ? true : false} onChangeText={(value) => (values[props.type] = value)} />
  </View>
);

export default Input;