import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: '42.5%',
    width: '100%',
    position: 'relative'
  },
  text: {
    color: '#f3705a',
    position: 'absolute',
    bottom: 7,
    right: 7,
    fontFamily: 'barlowMedium',
    fontSize: 14,
    zIndex: 999
  },
  image: {
    height: 50,
    width: 50
  }
});

export default styles;