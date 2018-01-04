import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#3498db',
    position: 'absolute',
    height: 80,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    left: 0
  },
  drone: {
    width: '25%',
    height: '100%'
  },
  information: {
    width: '50%',
    height: '100%'
  },
  rating: {
    backgroundColor: '#2980b9',
    width: '25%',
    height: '100%'
  }
});

export default styles; 