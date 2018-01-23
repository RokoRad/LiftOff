import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import DatePicker from '../../external/react-native-datepicker';
import styles from './styles.js';

const today = new Date().toISOString().slice(0, 10);
const inFive = new Date(Date.now() + 5*24*60*60*1000).toISOString().slice(0, 10);
const image = require('../../images/map/date.png');

const dateChange = (value) => {
  const iso = value.toISOString();
  AsyncStorage.setItem('@picker', JSON.stringify(iso).then());
  console.log(value)
}

const Picker = ({selected}) => (
  <View style={styles.item}>
    <DatePicker iconSource={image} hideText={true} style={styles.inner} customStyle={styles.dateIcon} mode="datetime" format="YYYY-MM-DD-hh-mm"  minDate={today} maxDate={inFive}
      confirmBtnText="Confirm" cancelBtnText="Cancel" onDateChange={(value) => dateChange(value)} onOpenModal={selected} />
  </View>
);

export default Picker;