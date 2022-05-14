import React from 'react';
import image from '../assets/images/progress.png';
import './Progress.css';

const Progress = () => (
  <div className="progress-container">
    <img src={image} alt="Progress" />
    <div className="percentage-holder">
      <h3>64%</h3>
      <p>Completed</p>
    </div>
  </div>
);

export default Progress;
