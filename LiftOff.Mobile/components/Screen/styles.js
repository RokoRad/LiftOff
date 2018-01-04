import { StyleSheet } from 'react-native';

// hack za postavljanje default vrijednosti screena
const styles = StyleSheet.create({
  screen: {
    height: '100%',
    paddingBottom: 50,
    position: 'relative',
    backgroundColor: '#fff',
    display: 'flex'
  }
});

export default styles;