import React, { Component } from 'react';
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
     <Picker onValueChange={(value) => this.setState({value: value})} style={{padding: 0, margin: 0}}>
       <Picker.Item label="Drone" value="key1" />
       <Picker.Item label="Drone" value="key2" />
       <Picker.Item label="Drone" value="key3" />
       <Picker.Item label="Drone" value="key4" />
    </Picker>  
   );
 }
}

export default Dropdown;