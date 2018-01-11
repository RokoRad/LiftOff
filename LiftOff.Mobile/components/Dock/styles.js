import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dock: {
    borderRadius: 7,    
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
        height: 5,
        width: 5
    },
    elevation: 5,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 100,
    right: -10,
    height: 100,
    width: 60,
    zIndex: 999,
    paddingRight: 10
  }
});

export default styles;