import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

const styles = StyleSheet.create({
  dock: {
    borderRadius: 7,    
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
        height: 12,
        width: 12
    },
    elevation: 12,
    backgroundColor: vars.white,
    position: 'absolute',
    bottom: 100,
    right: -10,
    height: 110,
    width: 60,
    zIndex: 1000,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'column'
  }
});

export default styles;