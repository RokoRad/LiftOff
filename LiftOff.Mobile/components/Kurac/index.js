import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles.js';
import { language } from '../../config/settings.js'; // usage {language.testString}

const Kurac = (props) => (
    <Text style={styles.kurac}>{props.name}</Text>
);

export default Kurac;