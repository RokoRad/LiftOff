import React from 'react';
import './style.css';

const Button = (props) => (
  <a className="button" {...props}>{props.children}</a>
);

export default Button;