import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  marker: {
    height: 30,
    width: 30
  },
  hidden: {
    backgroundColor: 'transparent',
    width: 0,
    height: 0,
    zIndex: -100,
    position: 'absolute',
    top: '-100%',
    left: '-100%'
  }
});

export default styles;