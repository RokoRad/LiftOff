export default {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    enabled: false
  },
  animation: false,
  elements: { 
    point: { 
      radius: 0 
    }
},
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  }
};