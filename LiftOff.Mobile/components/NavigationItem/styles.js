import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  navigationItemWrapper: {
    flex: 1,
    width: '20%',
    height: '100%',
    backgroundColor: vars.white
  },
  navigationItem: {
    width: '100%'
  },
  navigationImage: {
    marginTop: 7.5,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 20,
    width: 20
  },
  navigationText: {
    marginTop: 2.5,
    marginBottom: 7.5,
    textAlign: 'center',
    fontSize: 8,
    color: vars.grey,
    fontFamily: vars.regular
  },
  navigationTextActive: {
    color: vars.blue
  }
});
