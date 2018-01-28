import React from 'react';
import Chart from 'react-chartjs2';
import './style.css';

export default ({days, scores}) => {
  const options = {
    legend: { 
      display: false 
    },
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: false
    },
  }

  const data = {
    labels: days,
    datasets: [{ 
        data: scores,
        borderColor: '#3073f2',
        fill: false
      }
    ]
  }

  return (
    <div className="graph">
      <Chart data={data} options={options} type='line' />
    </div>
  )
};
