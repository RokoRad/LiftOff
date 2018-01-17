import round from '../round';

const isValueText = (value) => {
  if(value === null) {
    return '/';
  } else {
    if(isNaN(value)) {
      return value;
    } else {
      return round(value);
    }
  }
};

export default isValueText;