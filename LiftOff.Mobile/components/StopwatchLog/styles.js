import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 3
  },
  left: {
    width: '10%'
  },
  active: {
  },
  leftInner: {
    textAlign: 'center'
  },
  middle: {
    width: '50%',
    paddingTop: 12,
    paddingBottom: 12
  },
  middleInner: {
    textAlign: 'right',
    fontSize: 14,
    fontFamily: 'barlowRegular'
  },
  middleRight: {
    width: '20%',
    backgroundColor: 'green'
  },
  right: {
    width: '15%',
    paddingTop: 12,
    paddingBottom: 12
  },
  rightInner: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'barlowRegular'
  },
  inner: {
    fontSize: 20,
    fontFamily: 'barlowBold',
    color: 'red'  
  }
});

export default styles;