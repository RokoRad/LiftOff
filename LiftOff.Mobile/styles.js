import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  // Statusbar hack for Android devices
  statusBar: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  // Screen size fix for all platforms
  fullScreen: {
    minHeight: '100%',
    width: '100%'
  }
});

export default styles;