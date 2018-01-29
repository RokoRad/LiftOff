import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

// hack za postavljanje default vrijednosti screena
const styles = StyleSheet.create({
  screen: {
    height: '100%',
    paddingBottom: 50,
    position: 'relative',
    backgroundColor: vars.white,
    display: 'flex'
  }
});

export default styles;