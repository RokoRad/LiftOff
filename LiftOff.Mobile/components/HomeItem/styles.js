import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  green: {
    color: '#47e389'
  },
  orange: {
    color: '#FF9052'
  },
  red: {
    color: '#F95F62'
  },
  wrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ced7e0',
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
    height: '100%'
  },
  top: {
    
  },
  title: {
    fontFamily: 'barlowMedium',
    fontSize: 12,
    marginBottom: 5
  },
  bottom: {

  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    position: 'relative'
  },
  leftText: {
    textAlign: 'left',
    width: 'auto',
    fontFamily: 'barlowRegular',
    fontSize: 10
  },
  rightText: {
    position: 'absolute',
    right: 0,
    fontFamily: 'barlowRegular',
    fontSize: 10
  },
  right: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rating: {
    fontFamily: 'barlowRegular',
    fontSize: 40
  }
});

export default styles;