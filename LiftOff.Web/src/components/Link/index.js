import React from 'react';
import './style.css';

export default ({ link, title }) => (
  <div className="link">
    <a href={link} className="link__inner">
      {title}
    </a>
  </div>
);
