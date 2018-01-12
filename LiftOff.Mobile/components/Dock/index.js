import React from 'react';
import { View, Text } from 'react-native';
import Calibration from '../../components/Calibration';
import Picker from '../../components/Picker';
import styles from './styles.js';

const Dock = ({calibration, selected}) => (
   <View style={styles.dock}>
     <Calibration calibration={calibration} />
     <Picker selected={selected} />
   </View>
);

export default Dock;