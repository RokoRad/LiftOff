import { AsyncStorage } from 'react-native';
import croatian from './hr';
import english from './en';

let language;

// provjera jezika
AsyncStorage.getItem('@language').then((response) => {
    if(response === 'hr') {
      module.exports.default = croatian;
    } else {
      module.exports.default = english;
      // ako je prvi render
      AsyncStorage.setItem('@language', 'en');
    }
});

export { language };