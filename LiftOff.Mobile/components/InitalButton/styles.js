import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#3f6ea7',
    paddingTop: 10,
    paddingBottom: 10,
    width: 130,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 7,    
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
        height: 5,
        width: 5
    },
    elevation: 5,
    marginBottom: 15
  },
  inner: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'barlowBold'
  }
});

export default styles;