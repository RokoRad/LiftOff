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
    shadowOpacity: 0.7,
    shadowRadius: 12,
    shadowOffset: {
        height: 25,
        width: 10
    },
    elevation: 55,
  }
});

export default styles;