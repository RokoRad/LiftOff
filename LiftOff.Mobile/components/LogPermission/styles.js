import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'pink',
    width: '100%'
  },
  text: {
    color: vars.grey,
    textAlign: 'left',
  }
});
