import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 7
  },
  string: {
    fontFamily: vars.regular,
    fontSize: 14
  },
  bold: {
    fontFamily: vars.regular,
    color: vars.grey,
    opacity: 0.7
  }
});
