import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  image: {
    width: 17.5,
    marginTop: 5.5,
    marginLeft: 3,
    height: 15
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
    opacity: 0.7,
    display: 'flex',
    flexDirection: 'row'
  },
  rightText: {
    fontFamily: vars.medium,
    fontSize: 14
  },
  inner: {
    display: 'flex',
    flexDirection: 'row'
  }
})