import React from 'react';
import Chart from 'react-chartjs2';
import _options from './_options.js';
import _data from './_data.js';
import './style.css';

export default ({ days, scores }) => (
  <div className="graph">
    <Chart data={_data(days, scores)} options={_options} type="line" />
  </div>
);
