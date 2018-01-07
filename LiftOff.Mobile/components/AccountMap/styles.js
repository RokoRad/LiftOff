import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: '25%',
    width: '100%',
    position: 'relative'
  },
  text: {
    color: '#f3705a',
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontFamily: 'barlowSemiBold',
    fontSize: 10,
    zIndex: 999
  },
  image: {
    height: 45,
    width: 45
  }
});

export default styles;