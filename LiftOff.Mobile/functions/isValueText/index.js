import round from '../round';
import capitalize from '../capitalize';

// kada je potrebno kapitalizirati string te zaoružiti broj, a ne znamo tip podatka
// koristimo funkciju isValueText koja za određeni tip podatka obvlja zadanu funkciju

export default value => {
  if (value === null || value === undefined) {
    return '/';
  } else {
    if (isNaN(value)) {
      return capitalize(value);
    } else {
      return round(value);
    }
  }
};
