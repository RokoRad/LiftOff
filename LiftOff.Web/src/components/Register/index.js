import React from 'react';
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
  <form className="register">
    <Input placeholder="Username" onChange={(e) => console.log(e)} />
    <Input placeholder="Email" type="email" onChange={(e) => holder.email = e} />
    <Input placeholder="Password" type="password" minLength="8" onChange={(e) => holder.password = e} />
    <InitalMessage type="register" />
    <Button onClick={() => register()}>Register</Button>
  </form>
);

export default Login;