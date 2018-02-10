// ovisno o tipu jedinica vraća vrijednosti

export default type => {
  if (type === 'metric') {
    return 'm';
  } else {
    return 'f';
  }
};
