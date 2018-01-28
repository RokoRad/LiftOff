import React from 'react';
import Chart from 'react-chartjs2';
import './style.css';

export default () => (
  <div className="graph">
    <Chart data={null} options={null} type='line' />
  </div>
);
