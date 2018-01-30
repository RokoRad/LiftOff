import React from 'react';
import HomeRating from '../HomeRating';
import HomeList from '../HomeList';
import colorGenerator from '../../functions/colorGenerator';
import './style.css';

export default ({ list, string, time, rating }) => (
  <div className="home">
    <HomeRating color={colorGenerator(rating)} string={string} />
    {/* <HomeIndicator time={time} /> */}
    <HomeList list={list} />
  </div>
);
