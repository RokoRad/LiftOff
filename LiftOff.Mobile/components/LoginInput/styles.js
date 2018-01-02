import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginInputWrapper: {
    position: 'relative',
    width: 230,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  loginInputEmailIcon: {
    position: 'absolute',
    left: 0,
    bottom: 8,
    height: 15,
    width: 20
  },
  loginInputPasswordIcon: {
    position: 'absolute',
    left: 0,
    bottom: 8,
    height: 14.5,
    width: 20
  },
  loginInput: {
    marginLeft: 20,
    padding: 10,
    paddingLeft: 5
  }
});

export default styles;