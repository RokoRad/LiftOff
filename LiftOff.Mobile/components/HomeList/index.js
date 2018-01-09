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
      <HomeItem type="wind" rating={nester.WindRating} paramOnename="WindDirection" paramOneValue={nester.WindDirection} paramTwoName="WindSpeed" paramTwoValue={nester.WindSpeed} />
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
//     Cloudiness: null,
//     Humidity: null,
//     Max_Temperature: 15.03,
//     Min_Temperature: 15.03,
//     Presssure: 1004.53,
//     Temperature: 15.03,
//     TimeLocation: {
//       Location: {
//         Latitude: 23,
//         Longitude: 33,
//       },
//       Time: "2018-01-09T19:26:18.4557311+00:00",
//     },
//     UVIndex: 5.5,
//     Units: "metric",
//     Visibility: null,
//     Weather: "Clear",
//     WeatherDescription: "clear sky",
//     WeatherID: 800,
//     WindDirection: 44.0012,
//     WindSpeed: 4.12,
//   },
// }