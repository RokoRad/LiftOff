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
    fontFamily: 'robotoMedium',
    fontSize: 12
  },
  middleLeft: {
    width: '50%',
    textAlign: 'center',
    fontFamily: 'robotoMedium',
    fontSize: 12
  },
  middleRight: {
    width: '25%',
    textAlign: 'center',
    fontFamily: 'robotoMedium',
    fontSize: 12
  },
  right: {
    width: '15%',
    textAlign: 'center',
    fontFamily: 'robotoMedium',
    fontSize: 12
  },
  scroll: {
    height: '40%'
  }
});

export default styles;