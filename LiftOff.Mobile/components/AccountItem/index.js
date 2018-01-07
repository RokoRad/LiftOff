import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { language } from '../../config/settings.js';
import styles from './styles.js';

const Default = (props) => [
  <Text style={styles.string} key={props.title}>{props.title}</Text>,
  <Text style={styles.string} key={props.content}>{props.content}</Text>
];

const Pick = (props) => (
  <Picker>
    <Picker.Item label="Java" value="java" />
    <Picker.Item label="JavaScript" value="js" />
  </Picker>
);

const AccountItem = (props) => (
  <View style={styles.wrapper}>
    {props.dropdown ? <Pick /> : <Default />}
  </View>
);

export default AccountItem;