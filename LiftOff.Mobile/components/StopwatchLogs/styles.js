import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  wrapper: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    paddingBottom: 40
  },
  head: {
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5
  },
  left: {
    width: '25%',
    textAlign: 'center',
    fontFamily: vars.medium,
    color: vars.grey,
    fontSize: 10,
    opacity: 0.7
  },
  middleLeft: {
    width: '25%',
    textAlign: 'center',
    fontFamily: vars.medium,
    color: vars.grey,
    fontSize: 10,
    opacity: 0.7
  },
  middleRight: {
    width: '25%',
    textAlign: 'center',
    color: vars.grey,
    fontFamily: vars.medium,
    fontSize: 10,
    opacity: 0.7
  },
  right: {
    width: '25%',
    textAlign: 'center',
    fontFamily: vars.medium,
    color: vars.grey,
    fontSize: 10,
    opacity: 0.7
  },
  scroll: {
    height: '40%'
  },
  hidden: {
    height: 0
  }
});
