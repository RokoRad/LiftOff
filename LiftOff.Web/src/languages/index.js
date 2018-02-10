import storage from '../functions/storage';
import croatian from './hr';
import english from './en';

let holder;
const lang = storage.get('@language');

if (lang === 'hr') {
  holder = {
    ...croatian,
    language: 'Croatian'
  };
} else {
  holder = {
    ...english,
    language: 'English'
  };
  storage.set('@language', 'en');
}

export default holder;
