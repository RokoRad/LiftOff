import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginHolder: {
    backgroundColor: '#3498db',
    position: 'absolute',
    width: '100%',
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
  },
  loginHolderImageLogin: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 100,
    width: 100,
    resizeMode: 'contain'
  },
  loginHolderImageRegister: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 80,
    width: 80,
    marginTop: -10,
    resizeMode: 'contain'
  }
});

export default styles;