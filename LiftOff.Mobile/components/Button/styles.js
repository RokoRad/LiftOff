import { StyleSheet } from 'react-native';
import vars from '../../config/vars.js';

const globals = StyleSheet.create({
  outer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  buttonWrapper: {
    marginTop: 7.5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 4,    
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
        height: 5,
        width: 5
    },
    elevation: 5,
    marginBottom: 15,
    backgroundColor: vars.red
  },
  buttonInner: {
    color: vars.white,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'robotoMedium'
  }
});

export default globals;