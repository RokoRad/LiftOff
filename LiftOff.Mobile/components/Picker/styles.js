import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: '100%'
  },
  inner: {
    width: '100%', 
    height: '100%', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  dateIcon: {
    width: 40, 
    height: 40, 
    backgroundColor: 'blue'
  }
});

export default styles;