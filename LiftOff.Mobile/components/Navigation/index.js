import React from 'react';
import { View, Text } from 'react-native';
import NavigationItem from '../NavigationItem';

import { Route } from 'react-router-native';
import styles from './styles.js';

import Account from '../../views/Account';

const Navigation = (props) => (
    <View style={styles.navigation}>
    <Route to="/account" component={Account} />
      <NavigationItem route="/" type="Home" current={props.current} />
      <NavigationItem route="/map" type="Map" current={props.current} />
      <NavigationItem route="/liftoff" type="LiftOff" current={props.current} />
      <NavigationItem route="/account" type="Account" current={props.current} />
      <NavigationItem route="/settings" type="Settings" current={props.current} />
    </View>
);

export default Navigation;