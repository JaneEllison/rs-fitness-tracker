import React, { useState } from 'react';
import { Tooltip, Button } from 'antd';
import { UndoOutlined, PauseOutlined, CaretRightOutlined, PoweroffOutlined, SoundOutlined } from '@ant-design/icons';

function TimerButtonsComponent(props) {
  let {startTimer, changeCurrentTime, currentMinutes, currentSeconds, timerStarted, 
    timerStoped, isRunningTimer, setAudio, playAudio } = props;

  const [ sound, setSound ] = useState(true);


  const repeatTimer = () => {
    startTimer(currentMinutes, currentSeconds);
    setAudio('./example.mp3', true);
    playAudio();
    timerStarted();
  };

  const runTimer = () => {
    timerStarted()
    toggleButtons();
    playAudio();
  };

  const pauseTimer = () => {
    timerStoped()
    toggleButtons();
    playAudio();
  };

  const stopTimer = () => {
    changeCurrentTime(0, 0)
    startTimer(0, 0);
    timerStoped();
    toggleButtons();
    playAudio();
  };

  const toggleButtons = () => {
    setSound(!sound)
  };

  const mutedAudio = () => {
    playAudio()
    toggleButtons();
  }

  return (
    <div>
      <Tooltip title="Repeat timer">
        <Button 
          type="primary" 
          shape="circle" 
          icon={<UndoOutlined />}
          onClick={repeatTimer}
        />
      </Tooltip>
      {
        (isRunningTimer)
        ? <Tooltip title="Pause timer">
          <Button 
            type="primary" 
            shape="circle" 
            icon={<PauseOutlined />}
            onClick={pauseTimer}
          />
        </Tooltip>
        : <Tooltip title="Start timer">
          <Button 
            type="primary" 
            shape="circle" 
            icon={<CaretRightOutlined />}
            onClick={runTimer}            
          />
        </Tooltip>
      }
      <Tooltip title="Stop timer">
        <Button 
          type="primary" 
          shape="circle" 
          icon={<PoweroffOutlined />}
          onClick={stopTimer}
          disabled={isRunningTimer ? false : true}
        />
      </Tooltip>
      {
        (sound)
          ? <Tooltip title="Sound off">
              <Button 
                type="primary"
                shape="circle"
                icon={<SoundOutlined />}
                onClick={mutedAudio}
              />
            </Tooltip>
          : <Tooltip title="Sound on">
              <Button 
                type="primary"
                shape="circle"
                icon={<SoundOutlined />}
                onClick={mutedAudio}
              />
            </Tooltip>
      }
  </div>
  )
}

export default TimerButtonsComponent 