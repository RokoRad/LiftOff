import React from 'react';
import './style.css';
import language from '../../languages';

export default ({ content }) => {
  console.log(content)
  return(
  <div className="home__text">
    <div className="home-text__title">{language.WeatherRating}</div>
    <div className="home-text__message">{(language.language === 'Croatian') ? content.croatian : content.english}</div>
  </div>
  )
};