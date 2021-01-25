import React, { useState } from 'react';
import { Row, Tooltip, Button } from 'antd';
import style from '../../Time.module.css';
import { UndoOutlined, PauseOutlined, CaretRightOutlined } from '@ant-design/icons';
import { IoIosSquare, IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io';

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
    <Row justify="center">
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
      <Tooltip title="Stop timer" className={style.timeBtn}>
        <Button 
          type="primary" 
          shape="circle" 
          icon={<IoIosSquare />}
          onClick={stopTimer}
          disabled={isRunningTimer ? false : true}
        />
      </Tooltip>
      {
        (sound)
          ? <Tooltip title="Sound on" className={style.timeBtn}>
              <Button 
                type="primary"
                shape="circle"
                icon={<IoMdVolumeHigh />}
                onClick={mutedAudio}
              />
            </Tooltip>
          : <Tooltip title="Sound off" className={style.timeBtn}>
              <Button 
                type="primary"
                shape="circle"
                icon={<IoMdVolumeOff />}
                onClick={mutedAudio}
              />
            </Tooltip>
      }
  </Row>
  )
}

export default TimerButtonsComponent 