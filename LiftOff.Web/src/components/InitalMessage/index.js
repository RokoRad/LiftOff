import React from 'react';
import _toLogin from './_toLogin.js';
import _toRegister from './_toRegister.js';
import './style.css';

const InitalMessage = ({ type }) => (
  <div className="inital-message">{type === 'login' ? _toLogin(type) : _toRegister(type)}</div>
);

export default InitalMessage;
