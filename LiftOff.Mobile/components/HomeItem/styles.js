import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  wrapper: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(216, 218, 220, 0.25)',
    display: 'flex',
    flexDirection: 'row'
  },
  left: {
    width: '20%',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  icon: {
    width: 40,
    height: 40
  },
  middle: {
    width: '55%',
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
  },
  bothAligned: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
