import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3
  },
  left: {
    width: '20%',
    height: '100%',
    borderRadius: 7,
    backgroundColor: '#3498db' 
  },
  leftInner: {
    textAlign: 'center'
  },
  middle: {
    width: '60%',
    paddingTop: 15,
    paddingBottom: 15
  },
  middleInner: {
    textAlign: 'center'
  },
  right: {
    width: '20%',
    paddingTop: 15,
    paddingBottom: 15
  },
  rightInner: {
    textAlign: 'center'
  }
});

export default styles;