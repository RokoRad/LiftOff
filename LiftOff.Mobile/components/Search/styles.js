import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 30,
    left: 30,
    right: 30,
    padding: 10,
    backgroundColor: '#fff',
    zIndex: 999,
    borderRadius: 5,    
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
        height: 5,
        width: 5
    },
    elevation: 5
  },
  input: {
    fontSize: 12,
    fontFamily: 'barlowSemiBold',
    color: '#3498db'
  }
});

export default styles;