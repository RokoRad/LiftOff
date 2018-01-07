import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    position: 'absolute', 
    right: 10, 
    width: 50, 
    height: 50,
    zIndex: 998,
    backgroundColor: 'red',
    opacity: 0.5
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    zIndex: 999,
    backgroundColor: 'blue'
  }
});

export default styles;