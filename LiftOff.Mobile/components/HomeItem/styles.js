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
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F3F5',
    display: 'flex',
    flexDirection: 'row'
  },
  left: {
    width: '25%',
    justifyContent: 'flex-start'
  },
  icon: {
    width: 40,
    height: 40
  },
  middle: {
    width: '50%',
    height: '100%'
  },
  title: {
    fontFamily: 'robotoMedium',
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
    fontFamily: 'robotoRegular',
    fontSize: 10,
    color: '#8b959f'
  },
  rightText: {
    position: 'absolute',
    right: 5,
    fontFamily: 'robotoRegular',
    fontSize: 10,
    color: '#8b959f'
  },
  right: {
    width: '25%'
  },
  rating: {
    fontFamily: 'robotoRegular',
    fontSize: 30,
    color: '#2980b9'
  }
});

export default styles;