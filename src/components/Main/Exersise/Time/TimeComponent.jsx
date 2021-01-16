import React, { useState } from 'react';
import './Time.css';
import { Switch } from 'antd';
import StopwatchComponent from './Stopwatch/StopwatchComponent';
import TimerComponent from './Timer/TimerComponent'

const TimeComponent = () => {
  const [ isTimerMode, setIsTimerMode ] = useState(true);

  return (
    <div className = 'container'>
      <Switch 
        checkedChildren="Timer" 
        unCheckedChildren="Stopwatch" 
        defaultChecked
        onChange={() => setIsTimerMode(!isTimerMode)}
      />
      {
        (isTimerMode)
        ? <div className = 'stopwatch-container'>
            <TimerComponent />
          </div>
        : <div className = 'stopwatch-container'>
            <StopwatchComponent />
          </div>
      }
    </div>
  );
};

export default TimeComponent;
