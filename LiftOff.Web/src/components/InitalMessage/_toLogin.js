import React from 'react';
import _changeRoute from './_changeRoute.js';
import './style.css';

export default (type) => (
  <a href="#" className="inital-message__text" onClick={() => _changeRoute(type)}>
    Have an account? <span className="inital-message__text--bold">Login</span>
  </a>
);