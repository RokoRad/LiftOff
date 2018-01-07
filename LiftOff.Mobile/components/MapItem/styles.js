import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    position: 'absolute', 
    right: 10, 
    width: 40, 
    height: 40,
    zIndex: 998
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    zIndex: 999
  }
});

export default styles;