import React, { useEffect } from 'react';
import { Row, Typography } from 'antd';
import './CountSpiner.css';
import style from '../../Time.module.css';
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
    <Row justify="center" align="middle" class="wrapper" className={style.stopwatchCount}>
      <svg class="spinerIcon" viewBox="0 0 500 500">  
        <circle cx="250" cy="250" r="100" class="spinner-track" />
        {
          (isRunningStopwatch)?<circle cx="250" cy="250" r="100" class="spinner" />:''
        }
      </svg>
      <Row>
        <Title className={style.stopwatchTime}>
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
      </Row>
    </Row>
  )
}

export default StopwatchCountComponent;