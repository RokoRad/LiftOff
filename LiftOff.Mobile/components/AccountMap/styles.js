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
    fontSize: 12,
    zIndex: 999
  },
  image: {
    height: 40,
    width: 40
  }
});

export default styles;