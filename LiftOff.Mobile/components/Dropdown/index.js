import React, { Component } from 'react';
import { View } from 'react-native';
import { Picker } from 'react-native';

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      value: 'key1'
    };
 };

 render() {
    return (
    <View style={{borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#ccc', paddingTop: 5, paddingBottom: 5, marginTop: 5, marginBottom: 5}}>
      <Picker onValueChange={(value) => this.setState({value: value})}>
        <Picker.Item label="Drone" value="key1" />
        <Picker.Item label="Drone" value="key2" />
        <Picker.Item label="Drone" value="key3" />
        <Picker.Item label="Drone" value="key4" />
      </Picker>  
    </View>
   );
 }
}

export default Dropdown;