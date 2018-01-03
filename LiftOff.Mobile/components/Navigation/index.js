import React from 'react';
import { View, Text } from 'react-native';
import NavigationItem from '../NavigationItem';
import styles from './styles.js';

const Navigation = (props) => (
    <View style={styles.navigation}>
      <NavigationItem icon="" route="/home" type="home" current={props.current} />
      <NavigationItem icon="" route="/map" type="map" current={props.current} />
      <NavigationItem icon="" route="/liftoff" type="liftoff" current={props.current} />
      <NavigationItem icon="" route="/account" type="account" current={props.current} />
      <NavigationItem icon="" route="/settings" type="settings" current={props.current} />
    </View>
);

export default Navigation;