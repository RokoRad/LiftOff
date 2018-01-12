import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tooltip: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    borderRadius: 7,
    position: 'absolute',
    right: 60,
    bottom: 113.5,
    zIndex: 997,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
        height: 5,
        width: 5
    },
    elevation: 5
  },
  text: {
    fontSize: 10,
    color: '#3498db'
  }
});

export default styles;