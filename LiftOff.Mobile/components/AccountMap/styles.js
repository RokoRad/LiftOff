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
    top: 10,
    right: 10,
    fontFamily: 'barlowSemiBold',
    fontSize: 10,
    zIndex: 999
  },
  image: {
    height: 35,
    width: 35
  }
});

export default styles;