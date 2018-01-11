import React from 'react';
import storage from '../../functions/storage';
import './style.css';

const changeRoute = (type) => {
  if(type === 'login') {
    window.location.href = "/register";
  } else {
    window.location.href = "/";
  }
}

const InitalMessage = ({type}) => (
  <div className="inital-message">
    <a href="#" className="inital-message__text" onClick={() => changeRoute(type)}>
      Have an account? <span className="inital-message__text--bold">Login</span>
    </a>
  </div>
);

export default InitalMessage;