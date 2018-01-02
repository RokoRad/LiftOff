import React from 'react';
import { AsyncStorage } from 'react-native';

export const storage = {
  set: function(key, value) {
    Promise.all(AsyncStorage.setItem(key, value).then((response) => response));
  },
  get: function(key) {
    Promise.all(AsyncStorage.getItem(key).then((response) => response));
  },
  remove: function(key) {
    Promise.all(AsyncStorage.removeItem(key).then((response) => response));
  }
};

export default storage;