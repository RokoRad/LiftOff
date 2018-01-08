import React from 'react';
import { View, Text } from 'react-native';
import NavigationItem from '../NavigationItem';
import styles from './styles.js';

const Navigation = (props) => (
    <View style={styles.navigation}>
      <NavigationItem route="/home" type="FlySafe" current={props.current} />
      <NavigationItem route="/map" type="Planning" current={props.current} />
      <NavigationItem route="/liftoff" type="LiftOff" current={props.current} />
      <NavigationItem route="/account" type="Account" current={props.current} />
      <NavigationItem route="/settings" type="Settings" current={props.current} />
    </View>
);

export default Navigation;