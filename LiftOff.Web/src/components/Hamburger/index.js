import React from 'react';
import Menu from '../Menu';
import './style.css';

export default class hamburger extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: true
    };
  }

  render() {
    return (
      <div className="hamburger">
        {this.state.menu ? <Menu /> : null}
      </div>
    )
  }
}