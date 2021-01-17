import React, { useState, useEffect } from 'react';
import { Tooltip, Button } from 'antd';
import { CaretRightOutlined, PauseOutlined, PoweroffOutlined } from '@ant-design/icons';


const StopwatchComponent = () => {
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0);
  const [isRunningStopwatch, setIsRunningStopwatch] = useState(false);

  useEffect(()=> {
    if(isRunningStopwatch) {
      const stopwatchInterval = window.setInterval(() => {
        setStopwatchSeconds((stopwatchSeconds) => stopwatchSeconds + 1)
      }, 1000);
      return () => window.clearInterval(stopwatchInterval);
    }
    return undefined;
  }, [isRunningStopwatch]);

  let minutes = Math.floor(stopwatchSeconds / 60);
  let seconds = Math.floor(stopwatchSeconds % 60);

  return (
    <div className="stopwatch-wrapper">
      <div className="time-circle">
        <div className="time">
          {
            (minutes<10 && seconds<10)
              ? `0${minutes}:0${seconds}` :
            (minutes<10)
              ? `0${minutes}:${seconds}` :
            (seconds<10)
              ? `${minutes}:0${seconds}`
              : `${minutes}:${seconds}`
          }
        </div>
      </div>
      <div className="buttons">
        {
          (isRunningStopwatch)
            ? <Tooltip title="Pause">
                <Button 
                  type="primary" 
                  shape="circle" 
                  icon={<PauseOutlined />} 
                  onClick={() => setIsRunningStopwatch(false)}
                />
              </Tooltip> 
            : <Tooltip title="Start">
                <Button 
                  type="primary" 
                  shape="circle" 
                  icon={<CaretRightOutlined />}
                  onClick={() => setIsRunningStopwatch(true)}
                />
              </Tooltip>
        }
        <Tooltip title="Stop">
          <Button 
            type="primary" 
            shape="circle" 
            icon={<PoweroffOutlined />}
            // disabled={!isRunningStopwatch}
            onClick={() => {
              setIsRunningStopwatch(false);
              console.log(stopwatchSeconds)
              setStopwatchSeconds(0)
            }}
          />
        </Tooltip>
        
      </div>
    </div>
  )
}

export default StopwatchComponent
