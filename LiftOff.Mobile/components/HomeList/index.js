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
      <HomeItem type="temperature" rating={nester.TemperatureRating} paramOneName="MaxTemperature" paramOneValue={nester.weatherData.Max_Temperature} paramTwoName="MinTemperature" paramTwoValue={nester.weatherData.Min_Temperature} />
      <HomeItem type="uv" rating={nester.UVRating} />
      <HomeItem type="visibility" rating={nester.VisibilityRating} />
      <HomeItem type="wind" rating={nester.WindRating} paramOneName="WindDirection" paramOneValue={nester.WindDirection} paramTwoName="WindSpeed" paramTwoValue={nester.WindSpeed} />
    </ScrollView>
)};

export default HomeList;




// const defaultList = {
//   AtmosphereRating: null,
//   ConditionsRating: null,
//   TemperatureRating: null,
//   TotalRating: null,
//   UVRating: null,
//   VisibilityRating: null,
//   WindRating: null,
//   weatherData: {

// rain
//     Cloudiness: null,
//     Humidity: null,


//     Presssure: 1004.53,

// uv
//     Temperature: 15.03,
//     UVIndex: 5.5,

// rain
//     Visibility: null,
//     Weather: "Clear",

//     WeatherDescription: "clear sky",
//     WeatherID: 800,
//   },
// }