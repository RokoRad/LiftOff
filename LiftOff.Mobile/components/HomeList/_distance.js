export default (type) => {
  if(type === 'metric') {
    return 'm';
  } else {
    return 'f';
  }
}