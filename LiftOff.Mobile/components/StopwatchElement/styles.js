import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '35%',
    alignItems: 'center'
  },
  extended: {
    marginTop: '70%'
  },
  inner: {
    color: '#47525e',
    fontSize: 70,
    fontFamily: vars.medium,
    textAlign: 'center'
  },
  double: {
    fontFamily: vars.medium,
    color: '#47525e',
    fontSize: 70,
    lineHeight: 40,
    marginLeft: 5,
    marginRight: 5
  }
});
