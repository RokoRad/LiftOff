import React from 'react';
import axois from 'axois';
import Input from '../Input';
import Button from '../Button';
import InitalMessage from '../InitalMessage';
import storage from '../../functions/storage';
import './style.css';

let holder = {
  username: null,
  password: null
};

const login = () => {

};

const Login = () => (
  <form className="login">
    <Input placeholder="Username" onChange={() => holder.username} />
    <Input placeholder="Password" type="password" minLength="8" onChange={() => holder.password} />
    <InitalMessage type="login" />
    <Button onClick={() => login()}>Login</Button>
  </form>
);

export default Login;