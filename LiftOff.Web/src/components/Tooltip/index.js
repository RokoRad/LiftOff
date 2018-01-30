import React from 'react';
import './style.css';
import language from '../../languages';

export default ({ display }) => (
  <div className={`tooltip ${display ? 'tooltip--visible' : 'tooltip--hidden'}`}>
    {language.ChooseWhen}
  </div>
);
