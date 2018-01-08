import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: '35%',
    width: '100%',
    position: 'relative'
  },
  text: {
    color: '#f3705a',
    position: 'absolute',
    bottom: 7,
    right: 7,
    fontFamily: 'barlowSemiBold',
    fontSize: 14,
    zIndex: 999
  },
  image: {
    height: 50,
    width: 50
  }
});

export default styles;