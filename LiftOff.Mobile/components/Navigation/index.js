import React from 'react';
import { View, Text } from 'react-native';
import NavigationItem from '../NavigationItem';
import styles from './styles.js';

const Navigation = (props) => (
    <View style={styles.navigation}>
      <NavigationItem route="/" type="Home" current={props.current} />
      <NavigationItem route="/map" type="Map" current={props.current} />
      <NavigationItem route="/liftoff" type="LiftOff" current={props.current} />
      <NavigationItem route="/account" type="Account" current={props.current} />
      <NavigationItem route="/settings" type="Settings" current={props.current} />
    </View>
);

export default Navigation;