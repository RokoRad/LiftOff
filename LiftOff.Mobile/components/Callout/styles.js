import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

const styles = StyleSheet.create({
  wrapper: {
    width: 200
  },
  title: {
    fontSize: 11,
    fontFamily: vars.medium,
    textAlign: 'center',
    color: vars.blue,
    marginBottom: 5
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  string: {
    fontSize: 10,
    fontFamily: vars.regular,
  },
  rating: {
    fontFamily: vars.medium
  },
  green: {
    color: '#47E389'
  },
  orange: {
    color: '#FF9052'
  },
  red: {
    color: '#F95F62'
  }
});

export default styles;