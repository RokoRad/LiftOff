import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

const styles = StyleSheet.create({
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
    width: '10%',
    textAlign: 'center',
    fontFamily: vars.medium,
    fontSize: 10
  },
  middleLeft: {
    width: '50%',
    textAlign: 'center',
    fontFamily: vars.medium,
    fontSize: 10
  },
  middleRight: {
    width: '25%',
    textAlign: 'center',
    fontFamily: vars.medium,
    fontSize: 10
  },
  right: {
    width: '15%',
    textAlign: 'center',
    fontFamily: vars.medium,
    fontSize: 10
  },
  scroll: {
    height: '40%'
  }
});

export default styles;