import React from 'react';
import HomeRating from '../HomeRating';
import HomeList from '../HomeList';
import './style.css';

export default ({ }) => (
  <div className="home">
    <HomeRating color="red" />
    <HomeList />
  </div>
);