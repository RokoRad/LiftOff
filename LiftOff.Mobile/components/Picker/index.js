import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import DatePicker from '../../external/react-native-datepicker';
import styles from './styles.js';
import _hideTooltip from './_hideTooltip.js';
import _dateChange from './_dateChange.js';

// konstante za datepickera
const today = new Date().toISOString().slice(0, 10),
  inFive = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
  image = require('../../images/map/date.png');

// ui sučelje datepickera
export default ({ history }) => (
  <View style={styles.item}>
    <DatePicker
      iconSource={image}
      hideText={true}
      style={styles.inner}
      customStyle={styles.dateIcon}
      mode="datetime"
      format="YYYY-MM-DDTHH:mm:ss.sssZ"
      minDate={today}
      maxDate={inFive}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      onDateChange={value => _dateChange(value, history)}
      onOpenModal={() => _hideTooltip()}
    />
  </View>
);
