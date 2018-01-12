import React from 'react';
import { View, Text } from 'react-native';
import Calibration from '../../components/Calibration';
// import Tooltip from '../../components/Tooltip';
import Picker from '../../components/Picker';
import styles from './styles.js';

const Dock = () => (
   <View style={styles.dock}>
     <Calibration />
     <Picker />
   </View>
);

export default Dock;