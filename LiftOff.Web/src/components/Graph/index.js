import React from 'react';
import Chart from 'react-chartjs2';
import './style.css';

export default ({ days, scores }) => {
  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: false
    },
    animation: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
      }],
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
      }],
    }
  };

  const data = {
    labels: days,
    datasets: [
      {
        data: scores,
        borderColor: '#3073f2',
        fillOpacity: 0.8, 
        backgroundColor: 'rgba(48, 115, 242, 0.5)'
      }
    ],
  };

  return (
    <div className="graph">
      <Chart data={data} options={options} type="line" />
    </div>
  );
};
