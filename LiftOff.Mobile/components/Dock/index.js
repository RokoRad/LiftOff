import React from 'react';
import { View, Text } from 'react-native';
import Calibration from '../../components/Calibration';
import Picker from '../../components/Picker';
import styles from './styles.js';

// dock komponenta - wrapper spotfinder i datepicker komponente na mapi
export default ({ history }) => (
  <View style={styles.dock}>
    <Calibration history={history} />
    <Picker history={history} />
  </View>
);
