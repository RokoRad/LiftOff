import React from 'react';
import './style.css';
import language from '../../languages';
import capitalize from '../../functions/capitalize';
import colorGenerator from '../../functions/colorGenerator';
import isValueText from '../../functions/isValueText';

const icons = {
  atmosphere: '../../images/weather/atmosphere.png',
  conditions: '../../images/weather/conditions.png',
  temperature: '../../images/weather/temperature.png',
  uv: '../../images/weather/uv.png',
  visibility: '../../images/weather/visibility.png',
  wind: '../../images/weather/wind.png'
};

export default ({ type, fVal, sVal, fName, sName, fAddon, sAddon, rating }) => (
  <div className="home-item__wrapper">
    <div className="home-item__left home-item__aligned">
      <img src={`${icons[type]}`} className="home-item__icon" />
    </div>
    <div className="home-item__middle">
      <div>
        <span className="home-item__title">{language[capitalize(type)]}</span>
      </div>
      <div>
        <div className="home-item__row">
          <span className="home-item__left-span">{language[fName]}</span>
          <span className="home-item__right-span">
            {isValueText(fVal)}
            {fAddon}
          </span>
        </div>
        <div className="home-item__row">
          <span className="home-item__left-span">{language[sName]}</span>
          <span className="home-item__right-span">
            {isValueText(sVal)}
            {sAddon}
          </span>
        </div>
      </div>
    </div>
    <div className="home-item__right home-item__aligned">
      {/* <span className={[styles.rating, rating !== null ? globals[colorGenerator(rating)] : null]}>
        {isValueText(rating)}
      </span> */}
    </div>
  </div>
);