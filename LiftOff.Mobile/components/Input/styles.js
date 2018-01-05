import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  	wrapper: {
      position: 'relative',
      marginTop: 5,
      marginBottom: 5,
      width: '100%'
    },
    image: {
      position: 'absolute',
      height: 15,
      width: 15,
      bottom: 10
    },
    input: {
      marginLeft: 20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 5,
      fontSize: 16,
      fontFamily: 'barlowMedium',
      color: '#fff'
    }
});

export default styles;