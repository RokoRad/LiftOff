import React from 'react';
import _changeRoute from './_changeRoute.js';
import language from '../../languages';
import './style.css';

export default type => (
  <a href="#" className="inital-message__text" onClick={() => _changeRoute(type)}>
    {language.ToLogin} <span className="inital-message__text--bold">{language.ToLoginBold}</span>
  </a>
);
