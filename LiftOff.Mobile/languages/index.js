import { AsyncStorage } from 'react-native';
import croatian from './hr';
import english from './en';

let language;

// provjera jezika
AsyncStorage.getItem('@language').then((response) => {
  console.log(response);
    if(response === 'hr') {
      module.exports.default = {
        ...croatian,
        language: 'Croatian'
      }
    } else {
      module.exports.default = {
        ...english,
        language: 'English'
      };
      // ako je prvi render
      AsyncStorage.setItem('@language', 'en');
    }
});

export default language;