import React from 'react';
import { View, Text } from 'react-native';
import NavigationItem from '../NavigationItem';
import styles from './styles.js';

const Navigation = (props) => (
    <View style={styles.navigation}>
      <NavigationItem icon="" route="/" current={props.current} />
      <NavigationItem icon="" route="/" current={props.current} />
      <NavigationItem icon="" route="/home" current={props.current} />
      <NavigationItem icon="" route="/" current={props.current} />
      <NavigationItem icon="" route="/" current={props.current} />
    </View>
);

export default Navigation;