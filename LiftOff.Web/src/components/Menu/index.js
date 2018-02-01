import React from 'react';
import _closeMenu from './_closeMenu.js';
import _changeLanguage from './_changeLanguage.js';
// import _changeUnits from './_changeUnits.js';
import { _changeUnits } from '../../functions/realtime';
import language from '../../languages';
import removeToken from '../../functions/removeToken';
import Button from '../Button';
import './style.css';

export default ({}) => (
  <div className="menu">
    <div onClick={() => _closeMenu()} className="menu__close">X</div>

    <div className="menu__item">
      <span className="menu-item__text">{language.changeUnits}</span>
      <label class="switch" onClick={() => _changeUnits()}>
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>

    <div className="menu__item">
      <span className="menu-item__text">{language.changeLanguage}</span>
      <label class="switch" onClick={() => _changeLanguage()}>
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>


    <Button onClick={() => removeToken()}>{language.Logout}</Button>
  </div>
);
