import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles.js';
import onEnter from './onEnter.js'

const Search = () => (
  <View style={styles.wrapper}>
    <TextInput underlineColorAndroid={'transparent'} placeholder="hueheu" style={styles.input} placeholderTextColor="#ccc" onSubmitEditing={(value) => onEnter(value)} />
  </View>
);

export default Search;