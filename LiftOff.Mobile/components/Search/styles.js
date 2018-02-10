import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 30,
    left: 30,
    right: 30,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: vars.white,
    zIndex: 999,
    elevation: 10
  },
  input: {
    fontSize: 14,
    fontFamily: vars.light,
    color: vars.grey
  },
  out: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 10,
    zIndex: 999
  }
});
