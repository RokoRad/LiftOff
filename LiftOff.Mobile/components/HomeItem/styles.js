import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#8b959f',
    display: 'flex',
    flexDirection: 'row'
  },
  left: {
    width: '25%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  middle: {
    width: '50%',
    height: '100%',
    backgroundColor: 'red'
  },
  top: {
    
  },
  title: {

  },
  bottom: {

  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'green'
  },
  leftText: {
    textAlign: 'left'
  },
  rightText: {
    textAlign: 'right'
  },
  right: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  rating: {

  }
});

export default styles;