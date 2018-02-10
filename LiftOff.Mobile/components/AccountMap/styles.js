import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  wrapper: {
    height: '42.5%',
    width: '100%',
    position: 'relative'
  },
  text: {
    color: '#f3705a',
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontFamily: vars.medium,
    fontSize: 14,
    zIndex: 999
  },
  image: {
    height: 40,
    width: 40
  }
});
