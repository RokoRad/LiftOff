import React from 'react';
import Input from '../Input';
import Button from '../Button';
import InitalMessage from '../InitalMessage';
import './style.css';

const Login = () => (
  <div className="login">
    <Input placeholder="Username" />
    <Input placeholder="Email" type="email" />
    <Input placeholder="Password" type="password" />
    <InitalMessage />
    <Button href="#">Login</Button>
  </div>
);

export default Login;