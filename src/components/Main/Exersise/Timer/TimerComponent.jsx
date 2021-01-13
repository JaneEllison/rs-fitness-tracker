import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';

import './Timer.css';
import WeatherComponent from './Weather/WeatherComponent';
import TimerCountComponent from './TimerCount/TimerCountComponent';
import TimerInputComponent from './TimerCount/TimerInputComponent';

import StopwatchComponent from './Stopwatch/StopwatchComponent';


const TimerComponent = () => {
  const [ trainMinutesValue, setTrainMinutesValue ] = useState(0);
  const [ trainSecondsValue, setTrainSecondsValue ] = useState(0);

  const [ seconds, setSeconds ] = useState(trainSecondsValue);
  const [ minutes, setMinutes ] = useState(trainMinutesValue);

  let [ lineTimer, setLineTimer ] = useState(0);
  const allSeconds = (trainMinutesValue * 60) + trainSecondsValue;

  useEffect(()=>{

    let TimerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          // alert("Время закончилось");
          clearInterval(TimerInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } 

      let currentSeconds = (minutes * 60) + seconds;
      let duringSeconds = allSeconds - currentSeconds;
      let procent = duringSeconds / allSeconds * 100;
      setLineTimer(lineTimer = Math.ceil(procent));

    }, 1000)

    return ()=> {
      clearInterval(TimerInterval);
    };
  }, [seconds, minutes]);

  function onCreate (trainMinutes, trainSeconds) {
    setTrainMinutesValue(trainMinutes)
    setTrainSecondsValue(trainSeconds)

    setMinutes(trainMinutes)
    setSeconds(trainSeconds)
  }

  return (
    <div className = 'container'>
      <Switch checkedChildren="Timer" unCheckedChildren="Stopwatch" defaultChecked />
      <div className = 'timer-container'>
        <TimerInputComponent 
         onCreate = {onCreate}
          trainMinutesValue = {trainMinutesValue}
         trainSecondsValue = {trainSecondsValue}
        />
        <TimerCountComponent 
          minutes = {minutes}
          seconds = {seconds}
         lineTimer = {lineTimer}
        />
        {/* <WeatherComponent /> */}
      </div>
      <div className = 'stopwatch-container'>
      <StopwatchComponent />
      </div>
    </div>
  );
};

export default TimerComponent;
