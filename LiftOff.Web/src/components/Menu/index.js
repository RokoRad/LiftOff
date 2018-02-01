import React from 'react';
import _closeMenu from './_closeMenu.js';
import _changeLanguage from './_changeLanguage.js';
import language from '../../languages';
import { _changeUnits } from '../../functions/realtime';
import removeToken from '../../functions/removeToken';
import Button from '../Button';
import './style.css';

export default ({}) => (
  <div className="menu">
    <div onClick={() => _changeUnits()}>changeUnits</div>
    <div onClick={() => _changeLanguage()}>changeLanguage</div>
    <div onClick={() => _closeMenu()} className="menu__close">X</div>


    <label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label>


    <Button onClick={() => removeToken()}>{language.Logout}</Button>
  </div>
);
