import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 7
  },
  string: {
    fontFamily: 'barlowRegular',
    fontSize: 14
  },
  bold: {
    fontFamily: 'barlowSemiBold',
    color: '#2980b9'
  },
  dropdownButton: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%'
  }
});

export default styles;