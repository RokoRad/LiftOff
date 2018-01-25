import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles.js';
import HomeItem from '../HomeItem';
import _speed from './_speed.js';
import _temperature from './_temperature.js'
import _distance from './_distance.js';


const windSpeed = (type) => {
  if(type === 'metric') {
    return 'km/h';
  } else {
    return 'mph';
  }
}

const HomeList = ({list, loaded}) => {
  const nester = list.weatherData;
  return (
    <ScrollView style={styles.container}>
      <HomeItem type="atmosphere" rating={list.AtmosphereRating} fName="Humidity" fVal={nester.Humidity} sName="Pressure" sVal={`${nester.Presssure}kPa`} fAddon="%" />
      <HomeItem type="conditions" rating={list.ConditionsRating} fName="Weather" fVal={nester.Weather} sName="Description" sVal={nester.WeatherDescription} />
      <HomeItem type="temperature" rating={list.TemperatureRating} fName="Min_Temperature" fVal={nester.Max_Temperature} sName="Max_Temperature" sVal={nester.Max_Temperature} fAddon={_temperature(nester.units)} sAddon={_temperature(nester.units)} />
      <HomeItem type="uv" rating={list.UVRating} fName="Uv" fVal={nester.UVIndex} sName="Cloudiness" sVal={nester.Cloudiness} sAddon="%" />
      <HomeItem type="visibility" rating={list.VisibilityRating} fName="Visibility" fVal={nester.Visibility} sName="Cloudiness" sVal={nester.Cloudiness} fAddon="m" sAddon="%" />
      <HomeItem type="wind" rating={list.WindRating} fName="WindDirection" fVal={nester.WindDirection} sName="WindSpeed" sVal={nester.WindSpeed} sAddon={_speed(nester.units)} />
    </ScrollView>
)};

export default HomeList;