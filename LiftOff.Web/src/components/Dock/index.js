import React from 'react';
import Calibration from '../Calibration';
import Picker from '../Picker';
import Tooltip from '../Tooltip';
import './style.css';

export default ({ display }) => (
  <div className="dock">
    <Calibration />
    <Picker />
    <Tooltip display={display} />
  </div>
);
