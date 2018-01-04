import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navigationItemWrapper: {
    flex: 1,
    width: '20%',
    height: '100%',
    backgroundColor: '#3498db'
  },
  navigationItem: {
    width: '100%',
  },
  navigationItemWrapperActive: {
    flex: 1,
    width: '20%',
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
    fontFamily: 'barlowMedium'
  }
});

export default styles;