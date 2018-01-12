import React from 'react';
import { View, Text } from 'react-native';
import Calibration from '../../components/Calibration';
import Picker from '../../components/Picker';
import styles from './styles.js';

const Dock = ({calibration}) => (
   <View style={styles.dock}>
   {console.log(calibration)}
     <Calibration calibration={() => calibration} />
     <Picker />
   </View>
);

export default Dock;