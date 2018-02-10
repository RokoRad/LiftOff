// ovisno o jedinicama vraća vrijednosti za brzinu

export default type => {
  if (type === 'metric') {
    return 'km/h';
  } else {
    return 'mph';
  }
};
