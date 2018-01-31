import React from 'react';
import _closeMenu from './_closeMenu.js';
import language from '../../languages';
import removeToken from '../../functions/removeToken'
import Button from '../Button';
import './style.css';

export default ({}) => (
  <div className="menu">
    <div onClick={() => _closeMenu()}>closeMenu</div>
    <Button onClick={() => removeToken()}>{language.Logout}</Button>
  </div>
);
