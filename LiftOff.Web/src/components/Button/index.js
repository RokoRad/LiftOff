import React from 'react';
import './style.css';

const Button = props => (
  <a className="button horizontal-align" {...props}>
    {props.children}
  </a>
);

export default Button;
