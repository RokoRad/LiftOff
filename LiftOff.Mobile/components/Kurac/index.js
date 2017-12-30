import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles.js';
import { lang } from '../../config/settings.js';
import { language } from '../../config/languages/en.js';

const Kurac = (props) => (
    <Text style={styles.kurac}>{props.name} {language.testString}</Text>
);

export default Kurac;