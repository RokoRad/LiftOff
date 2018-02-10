import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  screen: {
    height: '100%',
    position: 'relative',
    backgroundColor: vars.blue,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  container: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  wrapper: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -15
  }
});
