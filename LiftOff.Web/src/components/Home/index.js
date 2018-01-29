import React from 'react';
import HomeRating from '../HomeRating';
import HomeList from '../HomeList';
import colorGenerator from '../../functions/colorGenerator';
import './style.css';

export default ({ }) => (
  <div className="home">
    <HomeRating color={colorGenerator(2.3)} />
    <HomeList />
  </div>
);