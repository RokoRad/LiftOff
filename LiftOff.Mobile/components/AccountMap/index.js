import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';
import style from '../../functions/mapStyle';
import styles from './styles.js';

const AccountMap = (props) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>
      More than 30 flew here <Image source={require('../../images/map/fire.png')} style={styles.image}/>
      </Text>
    <MapView zoomEnabled={false} style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} pitchEnabled={false} cacheEnabled={true} scrollEnabled={false}
      region={{ latitude: props.latitude, longitude: props.longitude, latitudeDelta: 0.1, longitudeDelta: 0.05 }} rotateEnabled={false} >
    </MapView>
  </View>
);

export default AccountMap;