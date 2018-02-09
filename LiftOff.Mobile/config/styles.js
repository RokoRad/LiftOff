// dohvaćanje modula i globalnih vrijednosti
import { StyleSheet } from 'react-native';
import vars from './vars.js';

// funkcija vraća hexadekadski oblik boje ovisno o globalnim vrijednostima
export default StyleSheet.create({
  green: {
    color: vars.green
  },
  orange: {
    color: vars.orange
  },
  red: {
    color: vars.bad
  }
});
