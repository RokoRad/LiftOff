import React from 'react';
import { View, Text } from 'react-native';
import HomeRating from '../../components/HomeRating';
import HomeList from '../../components/HomeList';
import Screen from '../../components/Screen';
import realtime from '../../functions/realtime';

const Home = ({location}) => (
  <Screen current={location}>
    <HomeRating string="Flight is safe, but watch out for sporadic gusts of wind. Although cloudy, precipitation is not expected." rating="4.7"/>
    <HomeList />
  </Screen>
);

export default Home;