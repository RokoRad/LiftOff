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
        },
        ticks: {
          fontFamily: "Roboto",
          fontSize: 16,
          fontWeight: 300
        },
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          fontFamily: "Roboto",
          fontSize: 12,
          fontWeight: 300
        }
      }
    ]
  }
};