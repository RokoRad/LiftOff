import React from 'react';
import { View, Text } from 'react-native';
import Calibration from '../../components/Calibration';
import Picker from '../../components/Picker';
import styles from './styles.js';

const Dock = ({history, selected}) => {
  return (
   <View style={styles.dock}>
     <Calibration history={history} />
     <Picker selected={selected} histroy={history} />
   </View>
  )
};

export default Dock;