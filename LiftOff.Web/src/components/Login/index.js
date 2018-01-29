import React from 'react';
import Input from '../Input';
import Button from '../Button';
import InitalMessage from '../InitalMessage';
import storage from '../../functions/storage';
import _login from './_login.js';
import './style.css';

let holder = {
  username: '',
  password: ''
};

const Login = () => (
  <form className="login">
    <Input placeholder="Username" onChange={e => (holder.username = e.target.value)} />
    <Input
      placeholder="Password"
      type="password"
      minLength="8"
      onChange={e => (holder.password = e.target.value)}
    />
    <InitalMessage type="login" />
    <Button onClick={() => _login(holder)}>Login</Button>
  </form>
);

export default Login;
