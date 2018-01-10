import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles.js';
import values from '../../functions/values';
import capitalize from '../../functions/capitalize';

const Input = (props) => (
  <View style={styles.wrapper}>
    <TextInput underlineColorAndroid={'transparent'} placeholder={capitalize(props.type)} style={styles.input} placeholderTextColor="#fff" secureTextEntry={props.type === 'password' ? true : false} onChangeText={(value) => (values[props.type] = value)} />
  </View>
);

export default Input;