import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '35%'
  },
  inner: {
    backgroundColor: '#fff',
    color: '#47525e',
    fontSize: 100,
    borderRadius: 15,
    fontFamily: 'barlowMedium',
    textAlign: 'center'
  },
  double: {
    fontFamily: 'barlowMedium',
    color: '#47525e',
    fontSize: 80,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  }
});

export default styles;