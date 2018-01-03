import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles.js';
import { NativeRouter, Route } from 'react-router-native';
import Navigation from '../../components/Navigation';

const Home = ({location}) => (
  <View style={{height: '100%'}}>
    <Navigation current={location} />
    {console.log("loaded home")}
    {console.log(location)}
  </View>
);

export default Home;