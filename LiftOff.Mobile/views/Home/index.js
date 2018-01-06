import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import HomeRating from '../../components/HomeList';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';


const Home = ({location}) => (
  <Screen current={location}>
    <HomeRating />
    <HomeList />
  </Screen>
);

export default Home;