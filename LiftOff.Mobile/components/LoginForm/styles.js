import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  inputWrapper: {
    minHeight: 150,
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  message: {
    color: '#fff',
    fontFamily: 'barlowMedium',
    textAlign: 'right',
    fontSize: 14
  },
  messageBold: {
    fontFamily: 'barlowBold'
  },
  messageWrapper: {
    marginBottom: 10
  }
});

export default styles;