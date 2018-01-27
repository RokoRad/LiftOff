import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from '../../external/react-native-modal-dropdown';
import styles from './styles.js';

export default ({title, content}) => (
  <View style={styles.wrapper}>
    <Text style={styles.string}>{title}</Text>
    <Text style={[styles.string, styles.bold]}>{(content === '') ? '/' : content}</Text>
  </View>
);