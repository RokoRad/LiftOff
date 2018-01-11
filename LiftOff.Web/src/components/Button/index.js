import React from 'react';
import './style.css';

const Button = (props) => (
  <button className="button horizontal-align" {...props}>{props.children}</button>
);

export default Button;