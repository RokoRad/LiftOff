import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 'auto',
    width: '100%',
    backgroundColor: '#3498db',
    display: 'flex',
    flexDirection: 'row',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
        height: 10,
        width: 10
    },
    elevation: 10,
  }
});

export default styles;