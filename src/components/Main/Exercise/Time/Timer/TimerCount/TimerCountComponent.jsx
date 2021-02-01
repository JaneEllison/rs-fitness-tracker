import React, { useEffect } from 'react';
import { Col, Row, Progress, Typography } from 'antd';

const { Title } = Typography;

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
    <Col>
      <Row justify="center">
        <Progress 
          percent={lineTimer}
          strokeColor="blue"
          type="dashboard"
        />
      </Row>
      <Row justify="center">
        <Title level={2}>
          {
            (currentMinutes<10 && currentSeconds<10)
              ? `0${currentMinutes}:0${currentSeconds}` :
            (currentMinutes<10)
              ? `0${currentMinutes}:${currentSeconds}` :
            (currentSeconds<10)
              ? `${currentMinutes}:0${currentSeconds}`
              : `${currentMinutes}:${currentSeconds}`
          }
        </Title>
      </Row>
    </Col>
  )
}

export default TimerCountComponent;

