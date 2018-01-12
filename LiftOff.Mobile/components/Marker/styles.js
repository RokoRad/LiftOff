import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  marker: {
    height: 30,
    width: 30
  },
  hidden: {
    zIndex: -10,
    position: absolute,
    left: -300,
    top: -300
  }
});

export default styles;