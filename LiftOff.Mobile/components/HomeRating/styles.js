import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  full: {
    height: '100%',
    backgroundColor: vars.blue
  },
  drone: {
    width: 120,
    height: 120
  },
  wrapper: {
    height: '40%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  top: {
    flex: 1
  },
  bottom: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    flexBasis: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: 15
  },
  left: {
    width: '70%'
  },
  title: {
    color: vars.white,
    fontFamily: vars.bold,
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: vars.white,
    paddingBottom: 5,
    marginBottom: 5
  },
  text: {
    color: vars.white,
    fontFamily: vars.medium,
    fontSize: 10
  },
  right: {
    width: '30%',
    display: 'flex',
    alignItems: 'center'
  },
  rating: {
    color: vars.white,
    fontFamily: vars.medium,
    textAlign: 'right',
    width: '100%',
    fontSize: 45
  },
  bothAligned: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  green: {
    backgroundColor: vars.green
  },
  orange: {
    backgroundColor: vars.orange
  },
  red: {
    backgroundColor: vars.bad
  }
});
