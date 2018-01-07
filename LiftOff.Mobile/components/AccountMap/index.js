import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { MapView, PROVIDER_GOOGLE, Constants, Location, Permissions } from 'expo';
import style from '../../functions/mapStyle';
import styles from './styles.js';


var response = [
  {title:'1', coordinate: {latitude: 45.81539953, longitude: 15.96656854 }},
  {title:'2', coordinate: {latitude: 45.81539955, longitude: 15.96656855 }},
  {title:'ž', coordinate: {latitude: 45.8153995500000001, longitude: 15.966568550000001 }},
  {title:'e', coordinate: {latitude: 45.8153995500000002, longitude: 15.966568550000002 }},
  {title:'3', coordinate: {latitude: 45.81539853, longitude: 15.96656755 }},
  {title:'4', coordinate: {latitude: 45.81539756, longitude: 15.96656643 }},
  {title:'5', coordinate: {latitude: 45.81539655, longitude: 15.96656566 }},
  {title:'6', coordinate: {latitude: 45.81539552, longitude: 15.96656445 }}
];

const AccountMap = (props) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>
      More than {response.length} flew here <Image source={require('../../images/map/fire.png')} style={styles.image}/>
    </Text>
    <MapView zoomEnabled={true} style={{ flex: 1 }} provider={PROVIDER_GOOGLE} customMapStyle={style} pitchEnabled={false} cacheEnabled={true} scrollEnabled={false}
      region={{ latitude: props.latitude, longitude: props.longitude, latitudeDelta: 0.1, longitudeDelta: 0.05 }} rotateEnabled={false}>
      {response.map(marker => (
       <MapView.Marker title={marker.title} coordinate={marker.coordinate} key={Math.random()} image={require('../../images/map/pin.png')}/>
      ))}
    </MapView>
  </View>
);

export default AccountMap;