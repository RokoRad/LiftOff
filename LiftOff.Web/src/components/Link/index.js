import React from 'react';
import uppercase from '../../functions/uppercase';
import './style.css';

export default ({ type, link, title }) => (
  <div className="type link">
    <a href={link} className="link__inner">
      <div className={`link__badge link__badge--${type}`}>{uppercase(type)}</div>
      {title}
    </a>
  </div>
);
