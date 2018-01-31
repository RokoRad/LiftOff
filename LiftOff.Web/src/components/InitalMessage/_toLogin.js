import React from 'react';
import _changeRoute from './_changeRoute.js';
import language from '../../languages';
import './style.css';

export default type => (
  <a href="#" className="inital-message__text" onClick={() => _changeRoute(type)}>
    {language.ToRegister}{' '}
    <span className="inital-message__text--bold">{language.ToRegisterBold}</span>
  </a>
);
