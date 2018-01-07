import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles.js';
import values from '../../functions/values';

const Input = (props) => (
  <View style={styles.wrapper}>
    <TextInput underlineColorAndroid={'transparent'} placeholder={props.type} style={styles.input} placeholderTextColor="#fff" secureTextEntry={props.type === 'Password' ? true : false} onChangeText={(value) => (values[props.type] = value)} />
  </View>
);

export default Input;