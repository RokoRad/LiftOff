import React from 'react';
import Drone from '../Drone';
import HomeText from '../HomeText';
import './style.css';

export default ({ color, string }) => (
  <div className={`home__rating background background--${color}`}>
    <Drone color={color} />
    <HomeText content={string} />
  </div>
);