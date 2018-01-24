import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 30,
    left: 30,
    right: 30,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    zIndex: 999,    
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
        height: 10,
        width: 10
    },
    elevation: 15
  },
  input: {
    fontSize: 14,
    fontFamily: 'robotoLight',
    color: '#939393'
  },
  out: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 10,
    zIndex: 999
  }
});

export default styles;