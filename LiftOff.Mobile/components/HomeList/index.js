import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles.js';
import HomeItem from '../HomeItem';

const HomeList = (props) => (
  <ScrollView style={styles.container}>
    <HomeItem type="" rating=""/>
    <HomeItem type="" rating=""/>
    <HomeItem type="" rating=""/>
    <HomeItem type="" rating=""/>
    <HomeItem type="" rating=""/>
  </ScrollView>
);

export default HomeList;