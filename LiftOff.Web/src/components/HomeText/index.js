import React from 'react';
import './style.css';
import language from '../../languages';
import round from '../../functions/round';

export default ({ content, rating }) => (
  <div className="home__wrapper">
    <div className="home__text">
      <div className="home-text__title">{language.WeatherRating}</div>
      <div className="home-text__message">
        {language.language === 'Croatian' ? content.Croatian : content.English}
      </div>
    </div>
    <div className="home__number">
      {round(rating)}
    </div>
  </div>
);
