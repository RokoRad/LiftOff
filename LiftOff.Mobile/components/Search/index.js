import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles.js';
import onEnter from './onEnter.js';

let input;

const Search = () => (
  <View style={styles.wrapper}>
    <TextInput underlineColorAndroid={'transparent'} placeholder="hueheu" style={styles.input} placeholderTextColor="#3498db" caretHidden={true} onSubmitEditing={(value) => onEnter(input)} onChangeText={(value) => input = value}/>
  </View>
);

export default Search;