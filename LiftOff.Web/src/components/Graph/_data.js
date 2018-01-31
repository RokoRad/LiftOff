export default (days, scores) => {
  let object = [];

  for(let i = 0; i < scores.length; i++) {
    object.push(scores[i])
    if(i === 0) {

    } else if (i === 4) {
      object.push(scores[4]);  
      object.push(scores[4]);  
    }
  }

  console.log(object)
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