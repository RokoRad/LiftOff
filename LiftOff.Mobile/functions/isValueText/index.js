import round from '../round';
import capitalize from '../capitalize';

const isValueText = (value) => {
  if(value === null) {
    return '/';
  } else {
    if(isNaN(value)) {
      return capitalize(value);
    } else {
      return round(value);
    }
  }
};

export default isValueText;