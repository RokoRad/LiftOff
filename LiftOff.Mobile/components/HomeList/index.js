import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles.js';
import HomeItem from '../HomeItem';

const HomeList = (props) => (
  <ScrollView style={styles.container}>
    <HomeItem type="humidity" rating="1.7"/>
    <HomeItem type="rain" rating="3.0"/>
    <HomeItem type="temperature" rating="4.1"/>
    <HomeItem type="uv" rating="3.3"/>
    <HomeItem type="visibility" rating="2.0"/>
    <HomeItem type="wind" rating="2.4"/>
  </ScrollView>
);

export default HomeList;