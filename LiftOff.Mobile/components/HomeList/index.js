import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles.js';
import HomeItem from '../HomeItem';

const HomeList = (props) => (
  <ScrollView style={styles.container}>
    <HomeItem type="" rating="1.7"/>
    <HomeItem type="" rating="3"/>
    <HomeItem type="" rating="4.1"/>
    <HomeItem type="" rating="3.3"/>
    <HomeItem type="" rating="2"/>
  </ScrollView>
);

export default HomeList;