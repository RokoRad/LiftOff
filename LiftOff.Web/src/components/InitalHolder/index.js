import React from 'react';
import InitalLogo from '../../components/InitalLogo';
import Login from '../../components/Login';
// import Register from '../../components/Register';
import './style.css';

const InitalHolder = () => (
  <div className="inital__holder">
    <InitalLogo />
    <Login />
  </div>
);

export default InitalHolder;