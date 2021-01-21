import React, { useState } from 'react';
import style from './Time.module.css';
import { Switch, Row, Col } from 'antd';
import StopwatchComponent from './Stopwatch/StopwatchComponent';
import TimerComponent from './Timer/TimerComponent';

const TimeComponent = () => {
  const [ isTimerMode, setIsTimerMode ] = useState(true);

  let audio;

  const setAudio = (url, loop) => {
    if (!audio) audio = new Audio();
    audio.src = url;
    audio.loop = loop;
    audio.load();
  };

  const playAudio = () => {
    if(audio) {
      (audio.paused) ? audio.play() : audio.pause()
    }
  }

  return (
    <div>
      <Col>
        <Row
          justify='center'
          align='center'
        >
          <Switch className = {style.switch}
            checkedChildren="Timer" 
            unCheckedChildren="Stopwatch" 
            defaultChecked
            onChange={() => setIsTimerMode(!isTimerMode)}
          />
        </Row>
        <Row
          justify='center'
          align='center'
        >
        {
          (isTimerMode)
          ? <TimerComponent
              setAudio={setAudio}
              playAudio={playAudio}
            />
          : <StopwatchComponent
            />
          }
        </Row>
      </Col>
    </div>
  );
};

export default TimeComponent;
