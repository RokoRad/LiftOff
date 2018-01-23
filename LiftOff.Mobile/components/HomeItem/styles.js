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
    justifyContent: 'flex-start'
  },
  icon: {
    width: 50,
    height: 50
  },
  middle: {
    width: '50%',
    height: '100%'
  },
  title: {
    fontFamily: 'barlowMedium',
    fontSize: 12,
    marginBottom: 5,
    color: '#8b959f'
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
    fontSize: 10,
    color: '#8b959f'
  },
  rightText: {
    position: 'absolute',
    right: 5,
    fontFamily: 'barlowRegular',
    fontSize: 10,
    color: '#8b959f'
  },
  right: {
    width: '25%'
  },
  rating: {
    fontFamily: 'barlowRegular',
    fontSize: 40,
    color: '#2980b9'
  }
});

export default styles;