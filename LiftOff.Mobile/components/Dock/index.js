import React from 'react';
import { View, Text } from 'react-native';
import Calibration from '../../components/Calibration';
import Picker from '../../components/Picker';
import styles from './styles.js';

const Dock = ({history, selected, pass}) => (
   <View style={styles.dock}>
     <Calibration history={history} pass={ref} />
     <Picker selected={selected} />
   </View>
);

export default Dock;