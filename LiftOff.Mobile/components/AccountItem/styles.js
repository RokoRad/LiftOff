import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10
  },
  string: {
    fontFamily: 'barlowRegular',
    fontSize: 14
  },
  bold: {
    fontFamily: 'barlowSemiBold'
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