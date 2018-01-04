import React, { Component } from 'react';
 import { View, Text } from 'react-native';
import styles from './styles.js';
import { NativeRouter, Route } from 'react-router-native';
import Screen from '../../components/Screen';


const Home = ({location}) => (
  <Screen current={location}>
    <Text>ovo je sa homea</Text>
  </Screen>
);

export default Home;