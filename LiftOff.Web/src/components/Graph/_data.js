export default (days, scores) => {
  const object = scores;
  for(let i = 0; i < scores.length; i++) {
    if(i !== 4) {
      console.log(scores[i]);
      console.error((scores[i] + scores[i+1]) / 2)
    }
  }


              // //scores={[ 1, 5, 3, 2, 4 ]}
              // scores={[ 
              //   0.5, 1,
              //   3, 5,
              //   4, 3,
              //   2.5, 2,
              //   3, 4, 4 
              // ]}


   return {
    labels: days,
    datasets: [
      {
        data: scores,
        borderColor: '#fff',
        fillOpacity: 0.8,
        backgroundColor: 'rgba(48, 115, 242, 0.7)'
      }
    ]
  }
}