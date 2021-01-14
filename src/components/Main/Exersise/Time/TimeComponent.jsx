import React, { useState, useEffect } from 'react';
import './Time.css';
import StopwatchComponent from './Stopwatch/StopwatchComponent';
import TimerComponent from './Timer/TimerComponent'


const TimeComponent = () => {
  return (
    <div className = 'container'>
      <TimerComponent />
      <div className = 'stopwatch-container'>
        <StopwatchComponent />
      </div>
    </div>
  );
};

export default TimeComponent;
