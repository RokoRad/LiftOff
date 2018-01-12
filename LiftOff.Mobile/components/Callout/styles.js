import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: 200
  },
  hidden: {
    backgroundColor: 'red',
    width: 1,
    height: 1
  },
  title: {
    fontSize: 11,
    fontFamily: 'barlowSemiBold',
    textAlign: 'center',
    marginBottom: 5
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  string: {
    fontSize: 10,
    fontFamily: 'barlowRegular',
  },
  rating: {
    fontFamily: 'barlowSemiBold'
  },
  green: {
    color: '#47E389'
  },
  orange: {
    color: '#FF9052'
  },
  red: {
    color: '#F95F62'
  }
});

export default styles;