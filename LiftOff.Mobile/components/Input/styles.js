import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginTop: 5,
    marginBottom: 5,
    width: '100%'
  },
  input: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 15,
    fontFamily: vars.light,
    color: vars.white,
    borderBottomWidth: 1,
    borderBottomColor: vars.white
  }
});
