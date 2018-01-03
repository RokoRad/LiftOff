import React from 'react';
import { View, Text } from 'react-native';
import NavigationItem from '../NavigationItem';
import styles from './styles.js';

const Navigation = (props) => (
    <View style={styles.navigation}>
      <NavigationItem icon="" route="/" type="Home" current={props.current} />
      <NavigationItem icon="" route="/map" type="Map" current={props.current} />
      <NavigationItem icon="" route="/liftoff" type="LiftOff" current={props.current} />
      <NavigationItem icon="" route="/account" type="Account" current={props.current} />
      <NavigationItem icon="" route="/settings" type="Settings" current={props.current} />
    </View>
);

export default Navigation;