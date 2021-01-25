import React, { useState } from 'react';
import style from './Time.module.css';
import { Switch, Row, Col } from 'antd';
import StopwatchComponent from './Stopwatch/StopwatchComponent';
import TimerComponent from './Timer/TimerComponent';

const TimeComponent = () => {
  const [ isTimerMode, setIsTimerMode ] = useState(true);

  return (
    <div>
      <Col>
        <Row
          justify='start'
          align='left'
        >
        {
          (isTimerMode)
          ? <TimerComponent />
          : <StopwatchComponent />
          }
        </Row>
        <Row
          justify='start'
          align='left'
        >
          <Switch className = {style.switch}
            checkedChildren="Timer"
            unCheckedChildren="Stopwatch"
            defaultChecked
            onChange={() => setIsTimerMode(!isTimerMode)}
          />
        </Row>
      </Col>
    </div>
  );
};

export default TimeComponent;
