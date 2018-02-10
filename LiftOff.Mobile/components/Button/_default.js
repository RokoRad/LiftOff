import React from 'react';
import { Text } from 'react-native';
import styles from './styles.js';
import uppercase from '../../functions/uppercase';
import language from '../../languages';

// za tip teksta vraćća uppercase na jeziki sučelja
export default type => <Text style={styles.buttonInner}>{uppercase(language[type])}</Text>;