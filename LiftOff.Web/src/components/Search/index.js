import React from 'react';
import './style.css';
import language from '../../languages';
import capitalize from '../../functions/capitalize';
import _onEnter from './_onEnter.js';

let value = '';

export default ({}) => (
  <input
    className="search"
    placeholder={capitalize(language.Search)}
    onKeyPress={e => _onEnter(e, value)}
    onChange={e => (value = e.target.value)}
  />
);
