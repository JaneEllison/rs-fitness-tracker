/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Progress,
  Typography,
} from 'antd';

const { Title } = Typography;
const formatTime = (time) => `${time < 10 ? '0' : ''}${time}`;

const TimerCountComponent = ({
  isRunningTimer,
  setTimerSeconds,
  timerSeconds,
  allTimeSeconds,
}) => {
  const currentMinutes = Math.floor(timerSeconds / 60);
  const currentSeconds = Math.floor(timerSeconds % 60);

  useEffect(() => {
    if (isRunningTimer) {
      const TimerInterval = window.setInterval(() => {
        setTimerSeconds((seconds) => seconds - 1);
      }, 1000);

      return () => {
        window.clearInterval(TimerInterval);
      };
    }
    return undefined;
  }, [isRunningTimer]);

  const duringSeconds = allTimeSeconds - timerSeconds;
  const procent = (duringSeconds / allTimeSeconds) * 100;
  const lineTimer = Math.ceil(procent);

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
          {`${formatTime(currentMinutes)}:${formatTime(currentSeconds)}`}
        </Title>
      </Row>
    </Col>
  );
};

TimerCountComponent.propTypes = {
  setTimerSeconds: PropTypes.func.isRequired,
  timerSeconds: PropTypes.number.isRequired,
  allTimeSeconds: PropTypes.number.isRequired,
  isRunningTimer: PropTypes.bool.isRequired,
};

export default TimerCountComponent;
