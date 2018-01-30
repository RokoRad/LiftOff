import React from 'react';
import HomeItem from '../HomeItem';
import './style.css';
import _speed from './_speed.js';
import _temperature from './_temperature.js';
import _distance from './_distance.js';

export default ({list, loaded }) => {
  const nester = list.weatherData;
  return (
  <div className="home__list">
  <HomeItem
  type="conditions"
  rating={list.conditionsRating}
  fName="Weather"
  fVal={nester.weather}
  sName="Description"
  sVal={nester.weatherDescription}
  />
  <HomeItem
  type="wind"
  rating={list.windRating}
  fName="WindDirection"
  fVal={nester.windDirection}
  sName="WindSpeed"
  sVal={nester.windSpeed}
  sAddon={_speed(nester.units)}
  />
  <HomeItem
  type="visibility"
  rating={list.visibilityRating}
  fName="Visibility"
  fVal={nester.visibility}
  sName="Cloudiness"
  sVal={nester.cloudiness}
  fAddon={_distance(nester.units)}
  sAddon="%"
  />
  <HomeItem
  type="temperature"
  rating={list.temperatureRating}
  fName="Min_Temperature"
  fVal={nester.min_Temperature}
  sName="Max_Temperature"
  sVal={nester.max_Temperature}
  fAddon={_temperature(nester.units)}
  sAddon={_temperature(nester.units)}
  />
  <HomeItem
  type="atmosphere"
  rating={list.atmosphereRating}
  fName="Humidity"
  fVal={nester.humidity}
  sName="Pressure"
  sVal={`${nester.presssure}kPa`}
  fAddon="%"
  />
  <HomeItem
  type="uv"
  rating={list.UVRating}
  fName="Uv"
  fVal={nester.UVIndex}
  sName="Cloudiness"
  sVal={nester.cloudiness}
  sAddon="%"
  />
  </div>
)
}