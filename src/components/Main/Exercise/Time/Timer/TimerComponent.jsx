import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import TimerCountComponent from './TimerCount/TimerCountComponent';
import TimerInputComponent from './TimerInput/TimerInputComponent';
import TimerButtonsComponent from './TimerButtons/TimerButtonsComponent';
import TimerEndedModalComponent from './TimerEndedModal/TimerEndedModalComponent';

const TimerComponent = ({
  currentTrack,
  setCurrentTrack,
  getRandomAudio,
}) => {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [allTimeSeconds, setAllTimeSeconds] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(allTimeSeconds);
  const [isRunningTimer, setIsRunningTimer] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  let audioPlayer;

  const [isSoundOn, setIsSoundOn] = useState(true);

  const initPlayer = () => {
    audioPlayer = document.getElementById('audioPlayerTimer');
  };

  const handlePlayAudio = () => {
    if (audioPlayer.paused || audioPlayer.ended) {
      setTimeout(() => {
        audioPlayer.play();
      }, 0);
    } else {
      setTimeout(() => {
        audioPlayer.pause();
      }, 0);
    }
  };

  useLayoutEffect(() => {
    initPlayer();
  });

  const startTimer = (minutes, seconds) => {
    const allTime = minutes * 60 + seconds;
    setTimerSeconds(allTime);
    setAllTimeSeconds(allTime);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setAllTimeSeconds(0);
    setCurrentSeconds(0);
    setCurrentMinutes(0);
    setIsTimerOn(false);
  };

  const handleOk = () => {
    setTimerSeconds(allTimeSeconds);
    setIsModalVisible(false);
    getRandomAudio();
    setTimeout(() => {
      setIsRunningTimer(true);
      handlePlayAudio();
    }, 0);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  if (timerSeconds < 0) {
    setIsRunningTimer(false);
    setTimerSeconds(0);
    showModal();
    setCurrentTrack('./music/done.mp3');
    initPlayer();
    setTimeout(() => {
      audioPlayer.play();
    }, 0);
  }

  const changeCurrentTime = (minutes, seconds) => {
    setCurrentMinutes(minutes);
    setCurrentSeconds(seconds);
  };

  const timerStarted = () => {
    getRandomAudio();
    setIsRunningTimer(true);
    audioPlayer.pause();
    initPlayer();
    setTimeout(() => {
      audioPlayer.play();
    }, 0);
  };

  const mutedSound = () => {
    audioPlayer.muted = !!isSoundOn;
    setIsSoundOn(!isSoundOn);
  };

  return (
    <Row align="middle" style={{ width: '100%' }} justify="center">
      <Col span={12}>
        <>
          <TimerEndedModalComponent
            isModalVisible={isModalVisible}
            handleCancel={handleCancel}
            handleOk={handleOk}
          />
        </>
        <audio
          id="audioPlayerTimer"
          preload="metadata"
          src={currentTrack}
          type="audio/ogg"
        />
        <TimerInputComponent
          startTimer={startTimer}
          changeCurrentTime={changeCurrentTime}
          currentMinutes={currentMinutes}
          currentSeconds={currentSeconds}
          timerStarted={timerStarted}
          setIsTimerOn={setIsTimerOn}
        />
        <TimerButtonsComponent
          startTimer={startTimer}
          changeCurrentTime={changeCurrentTime}
          currentMinutes={currentMinutes}
          currentSeconds={currentSeconds}
          timerStarted={timerStarted}
          isRunningTimer={isRunningTimer}
          setIsRunningTimer={setIsRunningTimer}
          handlePlayAudio={handlePlayAudio}
          initPlayer={initPlayer}
          mutedSound={mutedSound}
          isSoundOn={isSoundOn}
          isTimerOn={isTimerOn}
          setIsTimerOn={setIsTimerOn}
        />
      </Col>
      <Col span={12}>
        <TimerCountComponent
          isRunningTimer={isRunningTimer}
          setTimerSeconds={setTimerSeconds}
          timerSeconds={timerSeconds}
          allTimeSeconds={allTimeSeconds}
        />
      </Col>
    </Row>
  );
};

TimerComponent.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  currentTrack: PropTypes.object.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  getRandomAudio: PropTypes.func.isRequired,
};

export default TimerComponent;
