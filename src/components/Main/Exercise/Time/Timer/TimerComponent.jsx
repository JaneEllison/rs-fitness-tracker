import React, { useState } from 'react';
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
  let audio;

  const setAudio = (url, loop) => {
    if (!audio) audio = new Audio();
    audio.src = url;
    audio.loop = loop;
    audio.load();
  };

  const playAudio = () => {
    if(audio){
      (audio.paused) ? audio.play() : audio.pause()
    }
  }

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
    setIsRunningTimer(true);
    setAudio('./example.mp3');
    playAudio();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  if(timerSeconds < 0) {
    setIsRunningTimer(false);
    setTimerSeconds(0);
    showModal();
    setAudio('./done.mp3', false);
    playAudio();
  }

  const changeCurrentTime = (minutes, seconds) => {
    setCurrentMinutes(minutes);
    setCurrentSeconds(seconds);
  }

  const timerStarted = () => {
    setIsRunningTimer(true);
  }

  const timerStoped = () => {
    setIsRunningTimer(false);
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
        <TimerInputComponent
          startTimer = {startTimer}
          changeCurrentTime = {changeCurrentTime}
          currentMinutes = {currentMinutes}
          currentSeconds = {currentSeconds}
          timerStarted = {timerStarted}
          setAudio = {setAudio}
          playAudio = {playAudio}
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
          setAudio = {setAudio}
          playAudio = {playAudio}
          allTimeSeconds = {allTimeSeconds}
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