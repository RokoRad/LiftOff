import React from 'react';
import Calibration from '../Calibration';
import Picker from '../Picker';
import Tooltip from '../Tooltip';
import './style.css';

export default ({}) => (
  <div className="dock">
    <Calibration />
    <Picker />
    <Tooltip display={true} />
  </div>
);
