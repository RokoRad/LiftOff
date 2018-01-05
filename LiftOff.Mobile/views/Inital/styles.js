import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    position: 'relative',
    backgroundColor: '#3498db'
  },
  container: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    height: 200,
    marginTop: '20%'
  },
  message: {
    color: '#fff',
    fontFamily: 'barlowMedium',
    textAlign: 'right',
    fontSize: 14
  },
  messageBold: {
    fontFamily: 'barlowBold'
  },
  messageWrapper: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 30
  }
});

export default styles;