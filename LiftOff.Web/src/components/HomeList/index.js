import React from 'react';
import HomeItem from '../HomeItem';
import './style.css';

export default ({ }) => (
  <div className="home__list">
      <HomeItem
        type="conditions"
        //rating={list.ConditionsRating}
        rating={3.444555}
        fName="Weather"
        //fVal={nester.Weather}
        fVal="Split"
        sName="Description"
        //sVal={nester.WeatherDescription}
        sVal="opis"
      />

      <HomeItem
        type="conditions"
        //rating={list.ConditionsRating}
        rating={3.444444}
        fName="Weather"
        //fVal={nester.Weather}
        fVal="Split"
        sName="Description"
        //sVal={nester.WeatherDescription}
        sVal="opis"
      />
  </div>
);