import React, { useState } from 'react';
import './Time.css';
import { Switch } from 'antd';
import StopwatchComponent from './Stopwatch/StopwatchComponent';
import TimerComponent from './Timer/TimerComponent';

const TimeComponent = () => {
  const [ isTimerMode, setIsTimerMode ] = useState(true);

  let audio;
  const playAydio = (url) => {
    if (!audio) audio = new Audio();
  
    audio.src = url;
    audio.load();
  
    setTimeout(function () {      
      audio.play();
    }, 0);
  };

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
            <TimerComponent 
              playAydio={playAydio}
            />
          </div>
        : <div className = 'stopwatch-container'>
            <StopwatchComponent 
              playAydio={playAydio}
            />
          </div>
      }
    </div>
  );
};

export default TimeComponent;
