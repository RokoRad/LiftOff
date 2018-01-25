import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

const styles = StyleSheet.create({
  navigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 'auto',
    width: '100%',
    backgroundColor: vars.black,
    display: 'flex',
    flexDirection: 'row',
    shadowOpacity: 1,
    shadowRadius: 100,
    shadowOffset: {
        height: 100,
        width: 100
    },
    elevation: 24
  }
});

export default styles;