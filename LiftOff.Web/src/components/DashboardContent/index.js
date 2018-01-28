import React from 'react';
import Graph from '../Graph';
import Map from '../Map';
import './style.css';

export default ({}) => (
  <div className="grid">
    <div className="grid__left">left</div>
    <div className="grid__right">
      <Map />
      <Graph />
    </div>
  </div>
);