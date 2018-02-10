// ovisno o jedinicama vraća vrijednosti za temperaturu

export default type => {
  if (type === 'metric') {
    return '°';
  } else {
    return 'F';
  }
};
