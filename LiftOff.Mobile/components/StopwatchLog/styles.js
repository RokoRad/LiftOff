import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 3
  },
  left: {
    width: '20%'
  },
  active: {
  },
  leftInner: {
    textAlign: 'center'
  },
  middle: {
    width: '60%',
    paddingTop: 12,
    paddingBottom: 12
  },
  middleInner: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'barlowRegular'
  },
  right: {
    width: '20%',
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