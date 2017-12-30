import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles.js';
import { language } from '../../config/settings.js';

const Kurac = (props) => (
    <Text style={styles.kurac}>{language.testString}</Text>
);

export default Kurac;