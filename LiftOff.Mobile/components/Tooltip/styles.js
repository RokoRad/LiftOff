import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

const styles = StyleSheet.create({
  tooltip: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: vars.white,
    borderRadius: 7,
    position: 'absolute',
    right: 60,
    bottom: 113.5,
    zIndex: 997,
    elevation: 5
  },
  text: {
    fontSize: 10,
    color: vars.blue
  }
});

export default styles;