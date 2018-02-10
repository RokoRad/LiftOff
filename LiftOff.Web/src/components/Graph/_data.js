export default (days, scores) => {
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
  };
};
