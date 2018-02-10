import round from '../round';
import capitalize from '../capitalize';

export default value => {
  if (value === null) {
    return '/';
  } else {
    if (isNaN(value)) {
      return capitalize(value);
    } else {
      return round(value);
    }
  }
};
