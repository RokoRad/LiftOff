import React from 'react';
import { AsyncStorage } from 'react-native';

export const storage = {
  set: async function(key, value) {
  //set: function(key, value) {
  //  Promise.all(AsyncStorage.setItem(key, value).then((response) => response));
    await AsyncStorage.setItem(key, value);
  },
  get: async function(key) {
  //get: function(key) {
    // Promise.all(AsyncStorage.getItem(key).then((response) => response));
    let value = await AsyncStorage.getItem(key);
    return value;
  },
  remove: function(key) {
    Promise.all(AsyncStorage.removeItem(key).then((response) => response));
  }
};

export default storage;