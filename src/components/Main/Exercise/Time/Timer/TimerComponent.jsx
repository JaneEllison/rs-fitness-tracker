import React, { useState, useLayoutEffect } from 'react';
import { Row, Col } from 'antd';
import TimerCountComponent from './TimerCount/TimerCountComponent';
import TimerInputComponent from './TimerInput/TimerInputComponent';
import TimerButtonsComponent from './TimerButtons/TimerButtonsComponent';
import TimerEndedModalComponent from './TimerEndedModal/TimerEndedModalComponent';

const TimerComponent = () => {
  const [ allTimeSeconds, setAllTimeSeconds ] = useState(0)
  const [ currentSeconds, setCurrentSeconds ] = useState(0);
  const [ currentMinutes, setCurrentMinutes ] = useState(0);
  const [ timerSeconds, setTimerSeconds ] = useState(allTimeSeconds);
  const [ isRunningTimer, setIsRunningTimer ] = useState(false);
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  
  let audioPlayer;

  const [ isSoundOn, setIsSoundOn ] = useState(true);
  const [ sound, setSound ] = useState('./example.mp3');

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
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setTimerSeconds(allTimeSeconds);
    setIsRunningTimer(true)
    console.log(allTimeSeconds)
    setSound('./example.mp3');
    handlePlayAudio()
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  if(timerSeconds < 0) {
    setIsRunningTimer(false);
    setTimerSeconds(0);
    showModal();

    setSound('./done.mp3');
    initPlayer();
    setTimeout(()=> {
      audioPlayer.play();
    }, 10)
    handlePlayAudio()
  }

  const changeCurrentTime = (minutes, seconds) => {
    setCurrentMinutes(minutes);
    setCurrentSeconds(seconds);
  }

  const timerStarted = () => {
    setIsRunningTimer(true);
    setSound('./example.mp3');
    audioPlayer.currentTime = 0;
    handlePlayAudio()
  }

  const timerStoped = () => {
    setIsRunningTimer(false);
    handlePlayAudio()
  }

  const mutedSound = () => {
    (isSoundOn) ? audioPlayer.muted=true : audioPlayer.muted=false
    setIsSoundOn(!isSoundOn)
  }

  return (
    <Row align="middle">
      <Col >
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
            src={sound} 
            type="audio/ogg" 
          />
        <TimerInputComponent
          startTimer = {startTimer}
          changeCurrentTime = {changeCurrentTime}
          currentMinutes = {currentMinutes}
          currentSeconds = {currentSeconds}
          timerStarted = {timerStarted}
          setSound={setSound}
        />
        <TimerButtonsComponent
          startTimer = {startTimer}
          changeCurrentTime = {changeCurrentTime}
          setTimerSeconds={setTimerSeconds}
          currentMinutes = {currentMinutes}
          currentSeconds = {currentSeconds}
          timerStarted = {timerStarted}
          timerStoped = {timerStoped}
          isRunningTimer = {isRunningTimer}
          allTimeSeconds = {allTimeSeconds}
          setSound={setSound}
          setIsRunningTimer={setIsRunningTimer}
          handlePlayAudio={handlePlayAudio}
          initPlayer={initPlayer}
          mutedSound={mutedSound}
          isSoundOn={isSoundOn}
        />
      </Col>
      <Col push={3}>
        <TimerCountComponent
            isRunningTimer={isRunningTimer}
            setTimerSeconds={setTimerSeconds}
            timerSeconds={timerSeconds}
            allTimeSeconds = {allTimeSeconds}
          />
      </Col>
    </Row>
  )
}

export default TimerComponent;