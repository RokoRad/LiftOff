import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  drone: {
    width: 50,
    height: 50
  },
  wrapper: {
    position: 'absolute',
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    top: 0,
    left: 0
  },
  droneWrapper: {
    width: '25%',
    height: '100%'
  },
  information: {
    width: '50%',
    height: '100%',
    padding: 8
  },
  rating: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '25%',
    height: '100%'
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
    fontSize: 12
  },
  informationText: {
    color: '#fff',
    fontFamily: 'barlowRegular',
    fontSize: 10
  }
});

export default styles; 