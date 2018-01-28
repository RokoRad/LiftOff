import React from 'react';
import Input from '../Input';
import Button from '../Button';
import InitalMessage from '../InitalMessage';
import _register from './_register.js';
import './style.css';

let holder = {
  username: null,
  email: null,
  password: null
};

const Login = () => (
  <form className="register">
    <Input placeholder="Username" onChange={e => console.log(e)} />
    <Input placeholder="Email" type="email" onChange={e => (holder.email = e)} />
    <Input
      placeholder="Password"
      type="password"
      minLength="8"
      onChange={e => (holder.password = e)}
    />
    <InitalMessage type="register" />
    <Button onClick={() => _register()}>Register</Button>
  </form>
);

export default Login;
