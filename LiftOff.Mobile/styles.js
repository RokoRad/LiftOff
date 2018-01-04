import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  // Statusbar color
  // statusBar: {
  //    backgroundColor: '#3498db'
  //  },
  // Screen size fix for all platforms
  fullScreen: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: '#fff'
  }
});

export default styles;