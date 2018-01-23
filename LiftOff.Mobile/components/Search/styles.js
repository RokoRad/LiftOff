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
    borderRadius: 5,    
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
        height: 12,
        width: 12
    },
    elevation: 12
  },
  input: {
    fontSize: 12,
    fontFamily: 'barlowSemiBold',
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