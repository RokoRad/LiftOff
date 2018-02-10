// dohvaćanje modula za kreiranje stila te globalnih varijabli
import { StyleSheet } from 'react-native';
import vars from './config/vars.js';

// stil koji definira generalni layout screena
export default StyleSheet.create({
  fullScreen: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: vars.white
  }
});
