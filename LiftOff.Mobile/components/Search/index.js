import React, { Component } from 'react';
import { ScrollView, TextInput } from 'react-native';
import styles from './styles.js';
import onEnter from './onEnter.js';
import language from '../../languages';

let input;

export default () => (
  <ScrollView contentContainerStyle={styles.wrapper} style={styles.out} scrollEnabled={false}>
    <TextInput underlineColorAndroid={'transparent'} placeholder={language.Search} style={styles.input} placeholderTextColor="#939393" caretHidden={true} onSubmitEditing={() => onEnter(input)} onChangeText={(value) => input = value}/>
  </ScrollView>
);