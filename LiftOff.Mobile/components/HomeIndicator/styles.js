import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  image: {
    width: 40,
    height: 35,
    opacity: 0.7
  },
  wrapper: {
    display: 'flex',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    flexDirection: 'row',
    opacity: 0.7,
    paddingVertical: 5
  },
  left: {
    fontFamily: vars.regular,
    fontSize: 14,
    opacity: 0.7
  },
  right: {
    fontFamily: vars.medium,
    fontSize: 14,
    opacity: 0.7
  }
})