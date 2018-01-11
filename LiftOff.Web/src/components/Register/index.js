import React from 'react';
import axois from 'axois';
import Input from '../Input';
import Button from '../Button';
import InitalMessage from '../InitalMessage';
import './style.css';

let holder = {
  username: null,
  email: null,
  password: null
};

const register = () => {
  axios({
    method: 'POST',
    url: 'http://liftoffapi.azurewebsites.net/api/account/register',
    headers: {
      'Content-Type': 'application/json'
    },
    data: holder
  }).then((response) => {
    console.log(response)
  });
};

const Login = () => (
  <form className="login">
    <Input placeholder="Username" onChange={() => holder.username} />
    <Input placeholder="Email" type="email" onChange={() => holder.email} />
    <Input placeholder="Password" type="password" minLength="8" onChange={() => holder.password} />
    <InitalMessage type="register" />
    <Button onClick={() => register()}>Login</Button>
  </form>
);

export default Login;