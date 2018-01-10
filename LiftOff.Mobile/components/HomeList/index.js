import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles.js';
import HomeItem from '../HomeItem';

const HomeList = (props) => {
  const list = props.list;
  const nester = list.weatherData;
  return (
    <ScrollView style={styles.container}>
      <HomeItem type="atmosphere" rating={list.AtmosphereRating} fName="Humidity" fVal={nester.Humidity} sName="Pressure" sVal={nester.Presssure} />
      <HomeItem type="conditions" rating={list.ConditionsRating} fName="Weather" fVal={nester.Weather} sName="Weather description" sVal={nester.WeatherDescription} />
      <HomeItem type="temperature" rating={list.TemperatureRating} fName="Min_Temperature" fVal={nester.Max_Temperature} sName="Max_Temperature" sVal={nester.Max_Temperature} />
      <HomeItem type="uv" rating={list.UVRating} fName="UV" fVal={nester.UVIndex} sName="Cloudiness" sVal={nester.Cloudiness} />
      <HomeItem type="visibility" rating={list.VisibilityRating} fName="Visibility" fVal={nester.Visibility} sName="Cloudiness" sVal={nester.Cloudiness} />
      <HomeItem type="wind" rating={list.WindRating} fName="Wind direction" fVal={nester.WindDirection} sName="Wind speed" sVal={nester.WindSpeed} />
    </ScrollView>
)};

export default HomeList;