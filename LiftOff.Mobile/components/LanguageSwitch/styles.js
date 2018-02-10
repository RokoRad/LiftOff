import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row'
  },
  text: {
    color: vars.grey,
    textAlign: 'left',
    marginTop: 12.5
  }
});
