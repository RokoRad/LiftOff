import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputWrapper: {
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#fff'
  },
  loginWrapper: {
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: '#3498db'
  },
  loginBody: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 'auto'
  },
  forgotPassword: {
    textAlign: 'right',
    fontSize: 12,
    fontFamily: 'barlowSemiBold',
    width: 230,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#737373',
    marginBottom: 5
  }
});

export default styles;