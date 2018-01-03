import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginSwitchWrapper: {
    backgroundColor: 'red',
    paddingTop: 25,
    paddingBottom: 25,
    width: '50%',
    backgroundColor: '#3498db' // 2980b9 za active
  },
  loginSwitchWrapperActive: {
    backgroundColor: 'red',
    paddingTop: 25,
    paddingBottom: 25,
    width: '50%',
    backgroundColor: '#2980b9'
  },
  loginSwitchItem: {
    textAlign: 'center',
    fontFamily: 'barlowExtraBold',
    color: '#fff',
    fontSize: 20
  },
  loginSwitchContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default styles;