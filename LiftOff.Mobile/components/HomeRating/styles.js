import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    height: '50%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#47e389'
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
    width: '75%',
  },
  title: {
    color: '#fff',
    fontFamily: 'barlowSemiBold'
  },
  text: {
    color: '#fff',
    fontFamily: 'barlowMedium'
  },
  right: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rating: {
    color: '#fff',
    fontFamily: 'barlowMedium'
  }
});

export default styles;