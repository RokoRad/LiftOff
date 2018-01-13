import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from '../../external/react-native-modal-dropdown';
import { language } from '../../config/settings.js';
import styles from './styles.js';

const AccountItem = ({title, content}) => (
  <View style={styles.wrapper}>
    <Text style={styles.string}>{title}</Text>
    <Text style={[styles.string, styles.bold]}>{content}</Text>
  </View>
);

export default AccountItem;