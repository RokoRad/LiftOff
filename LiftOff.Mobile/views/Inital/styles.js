import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    position: 'relative',
    backgroundColor: '#3498db',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  container: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    height: 250,
    maxWidth: 230,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10
  },
  message: {
    color: '#fff',
    fontFamily: 'barlowMedium',
    textAlign: 'center',
    fontSize: 14
  },
  messageBold: {
    fontFamily: 'barlowBold'
  },
  messageWrapper: {
    width: '100%',
    paddingBottom: 30
  }
});

export default styles;