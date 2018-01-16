import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles.js';
import values from '../../functions/values';
import capitalize from '../../functions/capitalize';

const Input = ({type, onChangeText}) => (
  <View style={styles.wrapper}>
    <TextInput underlineColorAndroid={'transparent'} placeholder={capitalize(type)} style={styles.input} placeholderTextColor="#fff" secureTextEntry={type === 'password' ? true : false} onChangeText={onChangeText} />
  </View>
);

export default Input;