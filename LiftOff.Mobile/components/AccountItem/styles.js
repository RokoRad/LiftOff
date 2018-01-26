import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 7
  },
  string: {
    fontFamily: vars.regular,
    fontSize: 14
  },
  bold: {
    fontFamily: vars.medium,
    color: vars.blue
  }
});

export default styles;