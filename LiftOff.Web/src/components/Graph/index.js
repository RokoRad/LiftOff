import React from 'react';
import Chart from 'react-chartjs2';
import './style.css';

var data = {
  labels: ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak'],
  datasets: [{ 
      data: [1.7, 2.3, 4.6, 4.2, 1.5],
      borderColor: '#3073f2',
      fill: false
    }
  ]
};

var options = {
  legend: { 
    display: false 
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    enabled: false
  },
}

export default () => (
  <div className="graph">
    <Chart data={data} options={options} type='line' />
  </div>
);
