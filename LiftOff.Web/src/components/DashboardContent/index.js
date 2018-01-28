import React from 'react';
import Graph from '../Graph';
import Map from '../Map';
import './style.css';

export default ({}) => (
  <div className="grid">
    <div className="grid__left">
      home
    </div>
    <div className="grid__right">
      <Map />
      <Graph
        days={['Monday', 'Monday', 'Monday', 'Monday', 'Monday']}
        scores={[1.7, 2.3, 4.6, 4.2, 1.5]}
      />
    </div>
  </div>
);
