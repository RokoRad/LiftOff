import React from 'react';
import { View, Text } from 'react-native';
import Calibration from '../../components/Calibration';
import Tooltip from '../../components/Tooltip';
import Picker from '../../components/Picker';
import styles from './styles.js';

const Dock = () => [
    <Tooltip key="tooltip" />,
    <View style={styles.dock} key="dock">
      <Tooltip />
      <Calibration />
      <Picker />
    </View>
];

export default Dock;