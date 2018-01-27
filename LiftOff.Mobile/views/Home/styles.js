import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    flexDirection: 'row',
    opacity: 0.7,
    marginVertical: 10
  },
  left: {
    fontFamily: vars.regular,
    fontSize: 14
  },
  right: {
    fontFamily: vars.regular,
    fontSize: 14
  }
})