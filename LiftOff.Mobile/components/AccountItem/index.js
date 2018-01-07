import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { language } from '../../config/settings.js';
import styles from './styles.js';

const AccountItem = (props) => (
  <View style={styles.wrapper}>
    <Text style={styles.title}>{props.title}<Text>
    <Text style={styles.content}>{props.content}<Text>
  </View>
);

export default AccountItem;