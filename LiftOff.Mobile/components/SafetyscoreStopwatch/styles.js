import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  drone: {
    width: 50,
    height: 50
  },
  wrapper: {
    position: 'absolute',
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    left: 0
  },
  droneWrapper: {
    width: '25%',
    height: '100%'
  },
  information: {
    width: '50%',
    height: '100%',
    padding: 8,
    paddingTop: 6
  },
  rating: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '25%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ratingInner: {
    color: vars.white,
    fontSize: 40,
    fontFamily: vars.regular
  },
  informationTitle: {
    color: vars.white,
    fontFamily: vars.medium,
    marginBottom: 2,
    fontSize: 12
  },
  informationText: {
    color: vars.white,
    fontFamily: vars.regular,
    fontSize: 10
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
