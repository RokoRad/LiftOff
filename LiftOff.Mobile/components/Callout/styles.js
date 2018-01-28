import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  wrapper: {
    width: 200
  },
  title: {
    fontSize: 11,
    fontFamily: vars.medium,
    textAlign: 'center',
    color: vars.blue,
    marginBottom: 5
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  string: {
    fontSize: 10,
    fontFamily: vars.regular
  },
  rating: {
    fontFamily: vars.medium
  }
});
