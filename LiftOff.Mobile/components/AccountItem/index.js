import React from 'react';
import { View, Text } from 'react-native';
import { language } from '../../config/settings.js';
import styles from './styles.js';

const Default = (props) => [
  <Text style={styles.string} key={Math.random()}>{props.title}</Text>,
  <Text style={styles.string} key={Math.random()}>{props.content}</Text>
];

let index = 0;
const data = [
    { key: index++, label: 'Fruits' },
    { key: index++, label: 'Red Apples' },
    { key: index++, label: 'Cherries' },
    { key: index++, label: 'Cranberries' },
    { key: index++, label: 'Pink Grapefruit' },
    { key: index++, label: 'Raspberries' },
    { key: index++, label: 'Vegetables' },
    { key: index++, label: 'Beets' },
    { key: index++, label: 'Red Peppers' },
    { key: index++, label: 'Radishes' },
    { key: index++, label: 'Radicchio' },
    { key: index++, label: 'Red Onions' },
    { key: index++, label: 'Red Potatoes' },
    { key: index++, label: 'Rhubarb' },
    { key: index++, label: 'Tomatoes' }
];

const Pick = () => (
  <ModalPicker
    data={data}
    initValue="Select something yummy!"
    onChange={(option) => console.log(option)} />
);

const AccountItem = (props) => (
  <View style={styles.wrapper}>
    {props.dropdown ? <Pick /> : <Default {...props} />}
  </View>
);

export default AccountItem;