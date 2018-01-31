import React from 'react';
import './style.css';

export default ({ location, rating }) => (
  <div>
    {rating} {location}
  </div>
);
