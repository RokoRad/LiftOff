import React from 'react';
import HomeItem from '../HomeItem';
import './style.css';
import _speed from './_speed.js';
import _temperature from './_temperature.js';
import _distance from './_distance.js';

export default ({ list, loaded }) => {
  const nester = list.weatherData;
  console.log(list.TotalRating)
  return (
    <div className="home__list">
      <HomeItem
        type="conditions"
        rating={list.ConditionsRating}
        fName="Weather"
        fVal={nester.Weather}
        sName="Description"
        sVal={nester.WeatherDescription}
      />
      <HomeItem
        type="wind"
        rating={list.WindRating}
        fName="WindDirection"
        fVal={nester.WindDirection}
        sName="WindSpeed"
        sVal={nester.WindSpeed}
        sAddon={_speed(nester.Units)}
      />
      <HomeItem
        type="visibility"
        rating={list.VisibilityRating}
        fName="Visibility"
        fVal={nester.Visibility}
        sName="Cloudiness"
        sVal={nester.Cloudiness}
        fAddon={_distance(nester.Units)}
        sAddon="%"
      />
      <HomeItem
        type="temperature"
        rating={list.TemperatureRating}
        fName="Min_Temperature"
        fVal={nester.Min_Temperature}
        sName="Max_Temperature"
        sVal={nester.Max_Temperature}
        fAddon={_temperature(nester.Units)}
        sAddon={_temperature(nester.Units)}
      />
      <HomeItem
        type="atmosphere"
        rating={list.AtmosphereRating}
        fName="Humidity"
        fVal={nester.Humidity}
        sName="Pressure"
        sVal={`${nester.Presssure}kPa`}
        fAddon="%"
      />
      <HomeItem
        type="uv"
        rating={list.UVRating}
        fName="Uv"
        fVal={nester.UVIndex}
        sName="Cloudiness"
        sVal={nester.Cloudiness}
        sAddon="%"
      />
    </div>
  );
};
