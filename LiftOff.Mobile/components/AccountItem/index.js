import React from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { language } from '../../config/settings.js';
import styles from './styles.js';

const Default = (props) => [
  <Text style={styles.string} key={Math.random()}>{props.title}</Text>,
  <Text style={styles.string} key={Math.random()}>{props.content}</Text>
];

const Pick = () => (
  <ModalDropdown defaultValue="Choose drone" options={['aaaaaa', 'aaaaaa', 'aaaaaa', 'aaaaaa', 'aaaaaa']} style={styles.dropdownButton}/>
);

const AccountItem = (props) => (
  <View style={styles.wrapper}>
    {props.dropdown ? <Pick /> : <Default {...props} />}
  </View>
);

export default AccountItem;