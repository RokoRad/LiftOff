import React from 'react';
import HomeRating from '../HomeRating';
import HomeList from '../HomeList';
import colorGenerator from '../../functions/colorGenerator';
import './style.css';

export default ({ list, time, rating }) => (
  <div className="home">
    <HomeRating color={colorGenerator(rating)} string={list.AdvisoryRating} />
    {/* <HomeIndicator time={time} /> */}
    <HomeList list={list} />
  </div>
);
