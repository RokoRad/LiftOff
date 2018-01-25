import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

const styles = StyleSheet.create({
  green: {
    color: vars.green
  },
  orange: {
    color: vars.orange
  },
  red: {
    color: vars.bad
  },
  wrapper: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D8DADC',
    display: 'flex',
    flexDirection: 'row'
  },
  left: {
    width: '25%',
    justifyContent: 'flex-start'
  },
  icon: {
    width: 40,
    height: 40
  },
  middle: {
    width: '50%',
    height: '100%'
  },
  title: {
    fontFamily: vars.medium,
    fontSize: 12,
    marginBottom: 5,
    color: vars.black,
    opacity: 0.7
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
    opacity: 0.7
  },
  leftText: {
    textAlign: 'left',
    width: 'auto',
    fontFamily: vars.regular,
    fontSize: 10,
    color: vars.grey
  },
  rightText: {
    position: 'absolute',
    right: 5,
    fontFamily: vars.regular,
    fontSize: 10,
    color: vars.grey
  },
  right: {
    width: '25%'
  },
  rating: {
    fontFamily: vars.regular,
    fontSize: 30,
    color: vars.blue
  }
});

export default styles;