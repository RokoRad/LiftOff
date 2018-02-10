export default type => {
  if (type === 'metric') {
    return '°';
  } else {
    return 'F';
  }
};
