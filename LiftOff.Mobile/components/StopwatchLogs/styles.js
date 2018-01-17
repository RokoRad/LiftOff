import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
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
    width: '25%',
    textAlign: 'center',
    fontFamily: 'barlowMedium',
    fontSize: 12,
    backgroundColor: 'orange'
  },
  right: {
    width: '15%',
    textAlign: 'center',
    fontFamily: 'barlowMedium',
    fontSize: 12,
    backgroundColor: 'blue'
  },
  scroll: {
    height: '40%'
  }
});

export default styles;