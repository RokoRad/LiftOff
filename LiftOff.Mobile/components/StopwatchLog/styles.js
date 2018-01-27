import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  checkbox: {

  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 3
  },
  left: {
    width: '25%'
  },
  leftInner: {
    textAlign: 'center'
  },
  middle: {
    width: '25%',
    paddingTop: 12,
    paddingBottom: 12
  },
  middleInner: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: vars.regular,
  },
  middleRightInner: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: vars.medium 
  },
  middleRight: {
    width: '25%',
    paddingTop: 12.5
  },
  right: {
    width: '25%',
    paddingTop: 12,
    paddingBottom: 12
  },
  rightInner: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: vars.regular
  },
  inner: {
    fontSize: 20,
    fontFamily: vars.bold,
    color: '#3498db'  
  },
  bothAligned: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});