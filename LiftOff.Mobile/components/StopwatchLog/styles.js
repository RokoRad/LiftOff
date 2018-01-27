import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

const styles = StyleSheet.create({
  green: {
    color: '#47e389'
  },
  orange: {
    color: '#FF9052'
  },
  red: {
    color: '#F95F62'
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
  active: {
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
  }
});

export default styles;