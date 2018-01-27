import React, { Component } from 'react';
import { TextInput, Image, ScrollView  } from 'react-native';
import styles from './styles.js';
import capitalize from '../../functions/capitalize';

export default ({type, onChangeText}) => (
  <ScrollView contentContainerStyle={styles.wrapper} scrollEnabled={false}>
    <TextInput underlineColorAndroid={'transparent'} placeholder={capitalize(type)} style={styles.input} 
               placeholderTextColor="rgba(245, 247, 250, 0.6)" secureTextEntry={type === 'password' ? true : false} 
               onChangeText={onChangeText} keyboardType={(type === 'email') ? 'email-address' : 'default'} />
  </ScrollView>
);