import React from 'react';
import PropTypes from 'prop-types';
import { Row, Tooltip, Button } from 'antd';
import { UndoOutlined, PauseOutlined, CaretRightOutlined } from '@ant-design/icons';
import { IoIosSquare, IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io';
import style from '../../Time.module.css';

function TimerButtonsComponent(props) {
  const {
    startTimer,
    changeCurrentTime,
    currentMinutes,
    currentSeconds,
    timerStarted,
    isRunningTimer,
    setIsRunningTimer,
    handlePlayAudio,
    initPlayer,
    mutedSound,
    isSoundOn,
    isTimerOn,
    setIsTimerOn,
  } = props;

  const allTimeIsZero = currentSeconds + currentMinutes;

  const timerStoped = () => {
    setIsRunningTimer(false);
    handlePlayAudio();
  };

  const repeatTimer = () => {
    setIsRunningTimer(true);
    startTimer(currentMinutes, currentSeconds);
    timerStarted();
    initPlayer();
    setIsTimerOn(true);
  };

  const runTimer = () => {
    setIsRunningTimer(true);
    handlePlayAudio();
  };

  const pauseTimer = () => {
    timerStoped();
  };

  const stopTimer = () => {
    changeCurrentTime(0, 0);
    startTimer(0, 0);
    timerStoped();
    setIsTimerOn(false);
  };

  return (
    <Row justify="center" className={style.timerButtons}>
      <Tooltip title="Repeat timer">
        <Button
          type="primary"
          shape="circle"
          icon={<UndoOutlined />}
          onClick={repeatTimer}
          disabled={!allTimeIsZero}
        />
      </Tooltip>
      {
        (isRunningTimer)
          ? (
            <Tooltip title="Pause">
              <Button
                type="primary"
                shape="circle"
                icon={<PauseOutlined />}
                onClick={pauseTimer}
              />
            </Tooltip>
          )
          : (
            <Tooltip title="Play">
              <Button
                type="primary"
                shape="circle"
                icon={<CaretRightOutlined />}
                onClick={runTimer}
                disabled={!isTimerOn}
              />
            </Tooltip>
          )
      }
      <Tooltip title="Stop" className={style.timeBtn}>
        <Button
          type="primary"
          shape="circle"
          icon={<IoIosSquare />}
          onClick={stopTimer}
          disabled={!isRunningTimer}
        />
      </Tooltip>
      {
        (isSoundOn)
          ? (
            <Tooltip title="Sound on" className={style.timeBtn}>
              <Button
                type="primary"
                shape="circle"
                icon={<IoMdVolumeHigh />}
                onClick={mutedSound}
              />
            </Tooltip>
          )
          : (
            <Tooltip title="Sound off" className={style.timeBtn}>
              <Button
                type="primary"
                shape="circle"
                icon={<IoMdVolumeOff />}
                onClick={mutedSound}
              />
            </Tooltip>
          )
      }
    </Row>
  );
}

TimerButtonsComponent.propTypes = {
  startTimer: PropTypes.func.isRequired,
  changeCurrentTime: PropTypes.func.isRequired,
  setIsRunningTimer: PropTypes.func.isRequired,
  handlePlayAudio: PropTypes.func.isRequired,
  setIsTimerOn: PropTypes.func.isRequired,
  initPlayer: PropTypes.func.isRequired,
  mutedSound: PropTypes.func.isRequired,
  currentMinutes: PropTypes.number.isRequired,
  currentSeconds: PropTypes.number.isRequired,
  timerStarted: PropTypes.func.isRequired,
  isRunningTimer: PropTypes.bool.isRequired,
  isTimerOn: PropTypes.bool.isRequired,
  isSoundOn: PropTypes.bool.isRequired,
};

export default TimerButtonsComponent;
