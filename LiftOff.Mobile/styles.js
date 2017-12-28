import { StyleSheet, Platform, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  // Statusbar hack for Android devices
  statusBar: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});