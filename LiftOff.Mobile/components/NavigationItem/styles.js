import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navigationItemWrapper: {
    flex: 1,
    width: '20%',
    height: '100%',
    backgroundColor: '#fffeff'
  },
  navigationItem: {
    width: '100%',
  },
  navigationImage: {
    marginTop: 7.5,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 20,
    width: 20
  },
  navigationText: {
    marginTop: 2.5,
    marginBottom: 7.5,
    textAlign: 'center',
    fontSize: 12,
    color: '#8b959f',
    fontFamily: 'barlowSemiBold'
  },
  navigationTextActive: {
    color: '#2980b9'
  }
});

export default styles;