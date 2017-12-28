import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles.js';

const Kurac = (props) => (
    <Text style={styles.kurac}>{props.name} je glup ko kurac</Text>
);

export default Kurac;