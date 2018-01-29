export default (type) => {
  if(type === 'metric') {
    return 'kmh';
  } else {
    return 'mph';
  }
}