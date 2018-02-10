import React from 'react';
import { View, Text } from 'react-native';
import NavigationItem from '../NavigationItem';
import styles from './styles.js';

// wrapper navigacije
export default ({ current }) => (
  <View style={styles.navigation}>
    <NavigationItem route="/home" type="FlySafe" current={current} />
    <NavigationItem route="/map" type="Planning" current={current} />
    <NavigationItem route="/liftoff" type="LiftOff" current={current} />
    <NavigationItem route="/profile" type="Profile" current={current} />
    <NavigationItem route="/settings" type="Settings" current={current} />
  </View>
);
