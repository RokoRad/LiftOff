import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navigationItemWrapper: {
    flex: 1
  },
  navigationItem: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3498db'
  },
  navigationItemActive: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2980b9'
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
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'barlowRegular'
  }
});

export default styles;