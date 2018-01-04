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
    color: '#2980b9',
    fontSize: 80,
    borderRadius: 15,
    fontFamily: 'barlowSemiBold',
    textAlign: 'center'
  },
  double: {
    fontFamily: 'barlowExtraBold',
    color: '#2980b9',
    fontSize: 40,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 17.5
  }
});

export default styles;