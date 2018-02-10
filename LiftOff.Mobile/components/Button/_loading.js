import React from 'react';
import { ActivityIndicator } from 'react-native';
import vars from '../../config/vars.js';

// ako je stanje čekanja ne request pokazuje se loading indikator
export default () => <ActivityIndicator size="large" color={vars.blue} />;
