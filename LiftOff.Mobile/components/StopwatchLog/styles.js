import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 3,
    borderWidth: 1,
    borderColor: '#9fb7d3',
    borderRadius: 7
  },
  left: {
    width: '20%',
    height: '100%',
    borderRadius: 6,
    backgroundColor: '#3498db' 
  },
  leftInner: {
    textAlign: 'center'
  },
  middle: {
    width: '60%',
    paddingTop: 12,
    paddingBottom: 12
  },
  middleInner: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'barlowMedium'
  },
  right: {
    width: '20%',
    paddingTop: 12,
    paddingBottom: 12
  },
  rightInner: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'barlowBold'
  }
});

export default styles;