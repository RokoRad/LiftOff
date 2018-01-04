import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',   
    marginTop: 20,
  },
  head: {
    borderBottomColor: '#9fb7d3',
    borderBottomWidth: 1,
    paddingBottom: 3,
    display: 'flex',
    flexDirection: 'row'
  },
  left: {
    width: '20%',
    textAlign: 'center',
    fontFamily: 'barlowMedium',
    fontSize: 12
  },
  middle: {
    width: '60%',
    textAlign: 'center',
    fontFamily: 'barlowMedium',
    fontSize: 12
  },
  right: {
    width: '20%',
    textAlign: 'center',
    fontFamily: 'barlowMedium',
    fontSize: 12
  }
});

export default styles;