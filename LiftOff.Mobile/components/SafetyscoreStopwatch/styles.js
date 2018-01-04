import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'orange',
    position: 'absolute',
    height: 80,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    left: 0
  },
  drone: {
    backgroundColor: 'red',
    width: '25%',
    height: '100%'
  },
  information: {
    backgroundColor: 'blue',
    width: '50%',
    height: '100%'
  },
  rating: {
    backgroundColor: 'red',
    width: '25%',
    height: '100%'
  }
});

export default styles; 