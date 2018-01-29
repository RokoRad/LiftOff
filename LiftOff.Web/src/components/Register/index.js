import React from 'react';
import Input from '../Input';
import Button from '../Button';
import InitalMessage from '../InitalMessage';
import _register from './_register.js';
import language from '../../languages';
import token from '../../functions/token';
import './style.css';

let holder = {
  username: '',
  email: '',
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
      <form className="register">
        <Input placeholder="Username" onChange={e => (holder.username = e.target.value)} />
        <Input placeholder="Email" type="email" onChange={e => (holder.email = e.target.value)} />
        <Input
          placeholder="Password"
          type="password"
          minLength="8"
          onChange={e => (holder.password = e.target.value)}
        />
        <InitalMessage type="register" />
        <Button onClick={() => _register(holder)}>{language.Register}</Button>
      </form>
    )
  }
}