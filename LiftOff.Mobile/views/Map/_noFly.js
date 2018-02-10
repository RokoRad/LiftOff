import { AsyncStorage } from 'react-native';
import headers from '../../functions/headers';
import removeToken from '../../functions/removeToken';
import React from 'react';
import Circle from '../../components/Circle';
import updateZones from '../../actions';
import store from '../../store';

export default (history) => {
  AsyncStorage.getItem('@token').then((token) => {
    fetch('http://liftoffinfokup.azurewebsites.net/api/nofly/get-nofly-zones', {
      method: 'GET',
      headers: headers(token)
    }).then((response) => {
      if (response.status === 200) {
        store.dispatch(updateZones(store.getState().mapReducer.zones = JSON.parse(response._bodyInit)));
        // console.log(JSON.parse(response._bodyInit))
        // return JSON.parse(response._bodyInit);
      } else if (response.status === 401) {
        removeToken(history);
      }
    })
  })
};