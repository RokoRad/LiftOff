import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',   
    marginTop: 40,
    paddingBottom: 20
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
  },
  scroll: {
    height: '40%'
  }
});

export default styles;