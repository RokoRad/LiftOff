import React from 'react';
import Input from '../Input';
import Button from '../Button';
import InitalMessage from '../InitalMessage';
import './style.css';

const Login = () => (
  <form className="login">
    <Input placeholder="Username" />
    <Input placeholder="Password" type="password" minLength="8" />
    <InitalMessage type="login" />
    <Button href="#">Login</Button>
  </form>
);

export default Login;