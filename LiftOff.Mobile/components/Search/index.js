import React, { Component } from 'react';
import { ScrollView, TextInput } from 'react-native';
import styles from './styles.js';
import onEnter from './onEnter.js';
import language from '../../languages';

let input;

const Search = ({pass}) => (
  <ScrollView contentContainerStyle={styles.wrapper} scrollEnabled={false}>
    <TextInput underlineColorAndroid={'transparent'} placeholder={language.Search} style={styles.input} placeholderTextColor="#3498db" caretHidden={true} onSubmitEditing={(value) => onEnter(input, pass)} onChangeText={(value) => input = value}/>
  </ScrollView>
);

export default Search;