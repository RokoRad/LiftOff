import React from 'react';
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