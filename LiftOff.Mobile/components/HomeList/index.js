import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles.js';
import HomeItem from '../HomeItem';

const HomeList = (props) => {
  let nester = props.list;
  console.log(nester)

  return(
  <ScrollView style={styles.container}>
    <HomeItem type="humidity" rating="" />
    <HomeItem type="rain" rating="3.0"/>
    <HomeItem type="temperature" rating="4.1"/>
    <HomeItem type="uv" rating="3.3"/>
    <HomeItem type="visibility" rating="2.0"/>
    <HomeItem type="wind" rating="2.4"/>
  </ScrollView>
)};

export default HomeList;

// "Cloudiness": 0,
// 19:44:37:   "Humidity": 52,
// 19:44:37:   "Max_Temperature": 15.03,
// 19:44:37:   "Min_Temperature": 15.03,
// 19:44:37:   "Presssure": 1004.53,
// 19:44:37:   "Temperature": 15.03,
// 19:44:37:   "TimeLocation": Object {
// 19:44:37:     "Location": Object {
// 19:44:37:       "Latitude": 23,
// 19:44:37:       "Longitude": 33,
// 19:44:37:     },
// 19:44:37:     "Time": "2018-01-09T17:38:10.7630498+00:00",
// 19:44:37:   },
// 19:44:37:   "UVIndex": 5.5,
// 19:44:37:   "Units": "metric",
// 19:44:37:   "Visibility": null,
// 19:44:37:   "Weather": "Clear",
// 19:44:37:   "WeatherDescription": "clear sky",
// 19:44:37:   "WeatherID": 800,
// 19:44:37:   "WindDirection": 44.0012,
// 19:44:37:   "WindSpeed": 4.12,
// 19:44:37: }
