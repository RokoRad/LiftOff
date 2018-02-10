// dohvaćanje lpoziva na lokalnu memoriju te stringova
import { AsyncStorage } from 'react-native';
import croatian from './hr';
import english from './en';

let language;

// provjera jezika
AsyncStorage.getItem('@language').then(response => {
  // ovisno o vrijednosti vraća jezik
  if (response === 'hr') {
    module.exports.default = {
      ...croatian,
      language: 'Croatian'
    };
  } else {
    module.exports.default = {
      ...english,
      language: 'English'
    };
    // ako je prvi render, defaulta se na engleski
    AsyncStorage.setItem('@language', 'en');
  }
});

export default language;