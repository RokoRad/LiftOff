import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { language } from '../../config/settings.js';
import styles from './styles.js';

const AccountItem = (props) => (
  <View style={styles.wrapper}>
    <Text style={styles.string}>{props.title}</Text>
    {
      props.dropdown
      ? (<Picker selectedValue="java">
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>)
      : <Text style={styles.string}>{props.content}</Text>
    }
  </View>
);

export default AccountItem;