import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#3498db',
    position: 'absolute',
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    left: 0
  },
  drone: {
    width: '25%',
    height: '100%'
  },
  information: {
    width: '50%',
    height: '100%',
    padding: 8
  },
  rating: {
    backgroundColor: '#2980b9',
    width: '25%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ratingInner: {
    color: '#fff',
    fontSize: 50,
    fontFamily: 'barlowRegular'
  },
  informationTitle: {
    color: '#fff',
    fontFamily: 'barlowMedium',
    marginBottom: 2,
    fontSize: 14
  },
  informationText: {
    color: '#fff',
    fontFamily: 'barlowRegular',
    fontSize: 12
  }
});

export default styles; 