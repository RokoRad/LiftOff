const colorGenerator = (rating) => {
  if(rating < 4) {
    if(rating < 2) {
      return 'red';
    } else {
      return 'orange';
    }
  } else {
    return 'green';
  }
};

export default colorGenerator;