import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';
import { InputNumber, Tooltip, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import TimerCountComponent from './TimerCount/TimerCountComponent';
import TimerInputComponent from './TimerInput/TimerInputComponent';


const TimerComponent = () => {
  const [ allTimeSeconds, setAllTimeSeconds ] = useState(0)
  const [ currentSeconds, setCurrentSeconds ] = useState(0);
  const [ currentMinutes, setCurrentMinutes ] = useState(0);
  const [ timerSeconds, setTimerSeconds ] = useState(allTimeSeconds);
  const [ isRunningTimer, setIsRunningTimer ] = useState(false);

  useEffect(()=> {
    if(isRunningTimer) {
      const TimerInterval = window.setInterval(() => {
        setTimerSeconds((timerSeconds) => timerSeconds - 1);
      }, 1000);

      return () => window.clearInterval(TimerInterval);
    }
    return undefined
  }, [isRunningTimer])

  let duringSeconds = allTimeSeconds - timerSeconds;
  let procent = duringSeconds / allTimeSeconds * 100;
  console.log(allTimeSeconds, timerSeconds)
  let lineTimer = Math.ceil(procent);

  if(timerSeconds < 0) {
    alert('timer end')
    setIsRunningTimer(false);
    setTimerSeconds(0);
  }

  const onCreate = (minutes, seconds) => {
    const allTime = minutes * 60 + seconds;
    setTimerSeconds(allTime);
    setAllTimeSeconds(allTime);
  }

  let minutes = Math.floor(timerSeconds / 60);
  let seconds = Math.floor(timerSeconds % 60);

  return (
    <div>
      <Switch checkedChildren="Timer" unCheckedChildren="Stopwatch" defaultChecked />
      <div className = 'timer-container'>
        <InputNumber 
          onChange={(newValue) => {
            setCurrentMinutes (newValue)
          }}
          defaultValue={0}
          size="small"
          min={0}
          max={59}
        />
        <InputNumber 
          onChange={(newValue) => {
            setCurrentSeconds (newValue)
          }}
          defaultValue={0}
          size="small"
          min={0}
          max={59}
        />
        <Button 
          type="primary" 
          icon={<CheckOutlined />}
          onClick={() => {
            onCreate(currentMinutes, currentSeconds);
            setIsRunningTimer(true);
          }}
        >
          Set timer
        </Button>
        <TimerCountComponent 
          minutes = {minutes}
          seconds = {seconds}
          lineTimer = {lineTimer}
        />
      </div>
    </div>
  )
}

export default TimerComponent;