import React from 'react';
import Chart from 'react-chartjs2';
import './style.css';

var data = {
  labels: [1, 2, 3, 4, 5],
  datasets: [{ 
      data: [0.1, 2.3, 4.6, 4.2, 1.5],
      borderColor: "#3e95cd",
      fill: false
    }
  ]
};

var options = {
  legend: { display: false },
  responsive: true
}

export default () => (
  <div className="graph">
    <Chart data={data} options={options} type='line' />
  </div>
);
