import React, {  useEffect } from 'react';
import { Progress } from 'antd';

const TimerCountComponent = ({isRunningTimer, setTimerSeconds, timerSeconds, allTimeSeconds}) => {
  let currentMinutes = Math.floor(timerSeconds / 60);
  let currentSeconds = Math.floor(timerSeconds % 60);

  useEffect(()=> {
    if(isRunningTimer) {
      const TimerInterval = window.setInterval(() => {
        setTimerSeconds((timerSeconds) => timerSeconds - 1);
      }, 1000);

      return () => {
        window.clearInterval(TimerInterval);
      }
    }
    return undefined
  }, [isRunningTimer])

  let duringSeconds = allTimeSeconds - timerSeconds;
  let procent = duringSeconds / allTimeSeconds * 100;
  let lineTimer = Math.ceil(procent);

  return (
    <div className='timer-component'>
      <Progress type="circle" percent={lineTimer}></Progress>

      <div className="timer-count">
        <span>
          {
            (currentMinutes<10 && currentSeconds<10)
              ? `0${currentMinutes}:0${currentSeconds}` :
            (currentMinutes<10)
              ? `0${currentMinutes}:${currentSeconds}` :
            (currentSeconds<10)
              ? `${currentMinutes}:0${currentSeconds}`
              : `${currentMinutes}:${currentSeconds}`
          }
        </span>
      </div>
    </div>
  )
}

export default TimerCountComponent;

