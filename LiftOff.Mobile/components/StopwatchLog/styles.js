import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    marginTop: 15,
    flexDirection: 'row',
    paddingTop: 7.5,
    paddingBottom: 7.5
  },
  left: {
    width: '20%'
  },
  leftInner: {
    textAlign: 'center'
  },
  middle: {
    width: '60%',
  },
  middleInner: {
    textAlign: 'center'
  },
  right: {
    width: '20%',
  },
  rightInner: {
    textAlign: 'center'
  }
});

export default styles;