import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '50%'
  },
  inner: {
    backgroundColor: '#3498db',
    paddingTop: 20,
    paddingLeft: 15,
    paddingBottom: 20,
    paddingRight: 15,
    color: '#fff',
    fontSize: 40,
    borderRadius: 15,
    width: 'auto',
    fontFamily: 'barlowSemiBold',
    minWidth: 70,
    textAlign: 'center'
  },
  double: {
    fontFamily: 'barlowExtraBold',
    color: '#3498db',
    fontSize: 40,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 17.5
  }
});

export default styles;