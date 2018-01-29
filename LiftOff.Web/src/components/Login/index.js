import React from 'react';
import Input from '../Input';
import Button from '../Button';
import InitalMessage from '../InitalMessage';
import storage from '../../functions/storage';
import _login from './_login.js';
import language from '../../languages';
import token from '../../functions/token';
import './style.css';

let holder = {
  username: '',
  password: ''
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (token.get()) {
      window.location.href = "/dashboard";
    }
  }

  render() {
    return (
      <form className="login">
        <Input placeholder="Username" onChange={e => (holder.username = e.target.value)} />
        <Input
          placeholder="Password"
          type="password"
          minLength="8"
          onChange={e => (holder.password = e.target.value)}
        />
        <InitalMessage type="login" />
        <Button onClick={() => _login(holder)}>{language.Login}</Button>
      </form>
    )
  }
}