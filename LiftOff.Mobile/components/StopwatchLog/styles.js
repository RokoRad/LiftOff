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
    paddingBottom: 12,
    backgroundColor: 'green'
  },
  middleInner: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'barlowRegular'
  },
  middleRight: {
    width: '25%',
    backgroundColor: 'pink'
  },
  right: {
    width: '15%',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'purple'
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