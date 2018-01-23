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
    right: -2.5
  },
  dateIcon: {
    width: 35, 
    height: 35
  }
});

export default styles;