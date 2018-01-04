import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '50%'
  },
  inner: {
    backgroundColor: '#fff',
    color: '#47525e',
    fontSize: 100,
    borderRadius: 15,
    fontFamily: 'barlowSemiBold',
    textAlign: 'center'
  },
  double: {
    fontFamily: 'barlowExtraBold',
    color: '#47525e',
    fontSize: 80,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 25
  }
});

export default styles;