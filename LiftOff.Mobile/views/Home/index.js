import React, { Component } from 'react';
// import { View } from 'react-native';
import styles from './styles.js';
import { NativeRouter, Route } from 'react-router-native';
import Screen from '../../components/Screen';


const Home = ({location}) => (
  <Screen current={location}>
  home screen
  </Screen>
);

export default Home;