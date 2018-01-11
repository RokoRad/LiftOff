import React from 'react';
import Input from '../Input';
import Button from '../Button';
import './style.css';

const Login = () => (
  <div className="login">
    <Input placeholder="Username" />
    <Button href="#">Login</Button>
  </div>
);

export default Login;