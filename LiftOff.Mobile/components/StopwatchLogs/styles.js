import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',   
    marginTop: 40,
    paddingBottom: 40
  },
  head: {
    borderBottomColor: '#9fb7d3',
    borderBottomWidth: 1,
    paddingBottom: 3,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5
  },
  left: {
    width: '10%',
    textAlign: 'center',
    fontFamily: 'barlowMedium',
    fontSize: 12,
    backgroundColor: 'blue'
  },
  middleLeft: {
    width: '50%',
    textAlign: 'center',
    fontFamily: 'barlowMedium',
    fontSize: 12,
    backgroundColor: 'red'
  },
  middleRight: {
    width: '20%',
    textAlign: 'center',
    fontFamily: 'barlowMedium',
    fontSize: 12
  },
  right: {
    width: '15%',
    textAlign: 'center',
    fontFamily: 'barlowMedium',
    fontSize: 12
  },
  scroll: {
    height: '40%'
  }
});

export default styles;