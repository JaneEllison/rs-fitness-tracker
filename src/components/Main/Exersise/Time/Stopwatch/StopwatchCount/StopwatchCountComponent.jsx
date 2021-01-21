import React, { useEffect } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const StopwatchCountComponent = ({changeSeconds, stopwatchSeconds, isRunningStopwatch}) => {
  useEffect(()=> {
    if(isRunningStopwatch) {
      const stopwatchInterval = window.setInterval(() => {
        changeSeconds((stopwatchSeconds) => stopwatchSeconds + 1)
      }, 1000);
      return () => window.clearInterval(stopwatchInterval);
    }
    return undefined;
  }, [isRunningStopwatch]);
  
  let minutes = Math.floor(stopwatchSeconds / 60);
  let seconds = Math.floor(stopwatchSeconds % 60);

  return (
    <div className="time-count">
      <Title>
        {
          (minutes<10 && seconds<10)
            ? `0${minutes}:0${seconds}` :
          (minutes<10)
            ? `0${minutes}:${seconds}` :
          (seconds<10)
            ? `${minutes}:0${seconds}`
           : `${minutes}:${seconds}`
        }
      </Title>
    </div>
  )
}

export default StopwatchCountComponent;