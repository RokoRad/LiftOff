import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#3498db',
    position: 'absolute',
    height: 80,
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
    paddingTop: 3,
    paddingBottom: 3
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
    marginTop: 5,
    marginBottom: 2,
    fontSize: 16
  },
  informationText: {
    color: '#fff',
    fontFamily: 'barlowRegular',
    fontSize: 14
  }
});

export default styles; 