import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles.js';
import HomeItem from '../HomeItem';

const HomeList = (props) => {
  const nester = props.list;
  return (
    <ScrollView style={styles.container}>
      <HomeItem type="humidity" rating={nester.AtmosphereRating} />
      <HomeItem type="rain" rating={nester.ConditionsRating} />
      <HomeItem type="temperature" rating={nester.TemperatureRating} />
      <HomeItem type="uv" rating={nester.UVRating} />
      <HomeItem type="visibility" rating={nester.VisibilityRating} />
      <HomeItem type="wind" rating={nester.WindRating} />
    </ScrollView>
)};

export default HomeList;
