import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  message: {
    color: vars.white,
    fontFamily: vars.light,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 5
  },
  messageBold: {
    fontFamily: vars.medium
  },
  wrapper: {
    width: '100%',
    paddingBottom: 30
  }
});
