import React from 'react';
import NavLogo from '../NavLogo';
import Hamburger from '../Hamburger';
import './style.css';

const Navigation = () => (
  <div className="navigation">
    <div className="navigation__inner">
      <NavLogo />
      <Hamburger />
    </div>
  </div>
);

export default Navigation;
