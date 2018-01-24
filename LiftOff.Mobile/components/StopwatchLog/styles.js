import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  green: {
    color: '#47e389'
  },
  orange: {
    color: '#FF9052'
  },
  red: {
    color: '#F95F62'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 3
  },
  left: {
    width: '10%'
  },
  active: {
  },
  leftInner: {
    textAlign: 'center'
  },
  middle: {
    width: '50%',
    paddingTop: 12,
    paddingBottom: 12
  },
  middleInner: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'robotoRegular'
  },
  middleRightInner: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'robotoMedium' 
  },
  middleRight: {
    width: '25%',
    paddingTop: 12.5
  },
  right: {
    width: '15%',
    paddingTop: 12,
    paddingBottom: 12
  },
  rightInner: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'robotoRegular'
  },
  inner: {
    fontSize: 20,
    fontFamily: 'robotoBold',
    color: '#3498db'  
  }
});

export default styles;