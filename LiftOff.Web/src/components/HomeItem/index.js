import React from 'react';
import './style.css';
import language from '../../languages';
import capitalize from '../../functions/capitalize';
import colorGenerator from '../../functions/colorGenerator';
import isValueText from '../../functions/isValueText';
import round from '../../functions/round';

const icons = {
  atmosphere: require('../../images/weather/atmosphere.png'),
  conditions: require('../../images/weather/conditions.png'),
  temperature: require('../../images/weather/temperature.png'),
  uv: require('../../images/weather/uv.png'),
  visibility: require('../../images/weather/visibility.png'),
  wind: require('../../images/weather/wind.png')
};

export default ({ type, fVal, sVal, fName, sName, fAddon, sAddon, rating }) => (
  <div className="home-item__wrapper">
    <div className="home-item__left home-item__aligned">
      <div style={{ backgroundImage: `url(${icons[type]})` }} className="home-item__icon" />
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
      <span className={`home-item__rating color color--${colorGenerator(rating)}`}>
        {round(rating)}
      </span>
    </div>
  </div>
);