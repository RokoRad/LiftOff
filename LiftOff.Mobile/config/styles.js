import { StyleSheet } from 'react-native';

const globals = StyleSheet.create({
  green: {
    backgroundColor: '#47E389'
  },
  orange: {
    backgroundColor: '#FF9052'
  },
  red: {
    backgroundColor: '#F95F62'
  },
  bothAligned: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    marginTop: 7.5,
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
  buttonInner: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'barlowBold'
  }
});

export default globals;