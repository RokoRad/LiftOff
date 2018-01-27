import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  outer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  buttonWrapper: {
    marginTop: 7.5,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 17,
    paddingRight: 17,
    borderRadius: 4,    
    elevation: 2,
    marginBottom: 15,
    backgroundColor: vars.red
  },
  buttonInner: {
    color: vars.white,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: vars.medium
  }
});