import React, { useState } from 'react';
import { Switch, Row, Col } from 'antd';
import style from './Time.module.css';
import StopwatchComponent from './Stopwatch/StopwatchComponent';
import TimerComponent from './Timer/TimerComponent';
import timerMusic from '../../../../config/timerMusic';

const TimeComponent = () => {
  const [isTimerMode, setIsTimerMode] = useState(true);
  const [currentTrack, setCurrentTrack] = useState({});

  const getRandomAudio = () => {
    setCurrentTrack(timerMusic[Math.floor(Math.random() * timerMusic.length)]);
  };

  return (
    <div>
      <Col>
        <Row
          justify="start"
          align="center"
        >
          {
          (isTimerMode)
            ? (
              <TimerComponent
                currentTrack={currentTrack}
                setCurrentTrack={setCurrentTrack}
                getRandomAudio={getRandomAudio}
              />
            )
            : (
              <StopwatchComponent
                currentTrack={currentTrack}
                setCurrentTrack={setCurrentTrack}
                getRandomAudio={getRandomAudio}
              />
            )
          }
        </Row>
        <Row
          justify="start"
          align="center"
          style={{ marginBottom: '10px' }}
        >
          <Switch
            className={style.switch}
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
