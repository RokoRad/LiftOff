import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  green: {
    backgroundColor: '#47e389'
  },
  orange: {
    backgroundColor: '#FF9052'
  },
  red: {
    backgroundColor: '#F95F62'
  },
  wrapper: {
    height: '50%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  top: {
    flex: 1
  },
  bottom: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    flexBasis: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: 15
  },
  left: {
    width: '70%',
  },
  title: {
    color: '#fff',
    fontFamily: 'barlowSemiBold',
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 3,
    marginBottom: 3
  },
  text: {
    color: '#fff',
    fontFamily: 'barlowMedium',
    fontSize: 10
  },
  right: {
    width: '30%',
    display: 'flex',
    alignItems: 'center'
  },
  rating: {
    color: '#fff',
    fontFamily: 'barlowMedium',
    textAlign: 'right',
    width: '100%',
    fontSize: 45
  }
});

export default styles;