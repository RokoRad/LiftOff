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
      <HomeItem type="visibility" rating={list.VisibilityRating} fName="Visibility" fVal={nester.Visibility} sName="Cloudiness" sVal={nester.Cloudiness} />
      <HomeItem type="wind" rating={list.WindRating} fName="Wind direction" fVal={nester.WindDirection} sName="Wind speed" sVal={nester.WindSpeed} />
    </ScrollView>
)};

export default HomeList;


// 17:20:22:   "AdvisoryRating": Object {
//   17:20:22:     "Croatian": "Situacija nije idealna. Vrijeme sprječava let. Vjetar je miran. Odlična vidljivost",
//   17:20:22:     "English": "Situation not ideal. Weather prevents flight. Wind's calm. Great visiblity",
//   17:20:22:   },
//   17:20:22:   "AtmosphereRating": null,
//   17:20:22:   "ConditionsRating": null,
//   17:20:22:   "TemperatureRating": null,
//   17:20:22:   "TotalRating": null,
//   17:20:22:   "UVRating": null,
//   17:20:22:   "VisibilityRating": null,
//   17:20:22:   "WindRating": null,
//   17:20:22:   "weatherData": Object {
//   17:20:22:     "Cloudiness": null,
//   17:20:22:     "Humidity": null,
//   17:20:22:     "Max_Temperature": 15.03,
//   17:20:22:     "Min_Temperature": 15.03,
//   17:20:22:     "Presssure": 1004.53,
//   17:20:22:     "Temperature": 15.03,
//   17:20:22:     "TimeLocation": Object {
//   17:20:22:       "Location": Object {
//   17:20:22:         "Latitude": 23,
//   17:20:22:         "Longitude": 33,
//   17:20:22:       },
//   17:20:22:       "Time": "2018-01-09T19:26:18.4557311+00:00",
//   17:20:22:     },
//   17:20:22:     "UVIndex": 5.5,
//   17:20:22:     "Units": "metric",
//   17:20:22:     "Visibility": null,
//   17:20:22:     "Weather": "Clear",
//   17:20:22:     "WeatherDescription": "clear sky",
//   17:20:22:     "WeatherID": 800,
//   17:20:22:     "WindDirection": 44.0012,
//   17:20:22:     "WindSpeed": 4.12,
//   17:20:22:   },
//   17:20:22: }
  
// Atmosphere
// -humidity
// -pressure

// Conditions
// - weather
// - weather description

// Wind
// -windspeed
// -winddirection

// Temp
// -temp
// -mintemp
// -maxtemp

// UV
// -uv index
// -cloudiness

// Visibility
// -visibility
// -cloudiness (edited)



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