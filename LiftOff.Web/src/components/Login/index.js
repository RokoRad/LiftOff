import React from 'react';
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
  // axios({
  //   method: 'POST',
  //   url: 'http://liftoffapi.azurewebsites.net/api/account/register',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   data: holder
  // }).then((response) => {
  //   console.log(response)
  // });
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