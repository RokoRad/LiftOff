import { StyleSheet } from 'react-native';
import vars from './vars.js';

const globals = StyleSheet.create({
  green: {
    backgroundColor: vars.green
  },
  orange: {
    backgroundColor: vars.orange
  },
  red: {
    backgroundColor: vars.bad
  },
  bothAligned: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  outer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' 
  }
});

export default globals;