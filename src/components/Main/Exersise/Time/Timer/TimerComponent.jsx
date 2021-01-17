import React, { useState, useEffect } from 'react';
import {  Modal  } from 'antd';
import TimerCountComponent from './TimerCount/TimerCountComponent';
import TimerInputComponent from './TimerInput/TimerInputComponent';


const TimerComponent = () => {
  const [ allTimeSeconds, setAllTimeSeconds ] = useState(0)
  const [ currentSeconds, setCurrentSeconds ] = useState(0);
  const [ currentMinutes, setCurrentMinutes ] = useState(0);
  const [ timerSeconds, setTimerSeconds ] = useState(allTimeSeconds);
  const [ isRunningTimer, setIsRunningTimer ] = useState(false);

  useEffect(()=> {
    if(isRunningTimer) {
      const TimerInterval = window.setInterval(() => {
        setTimerSeconds((timerSeconds) => timerSeconds - 1);
      }, 1000);

      return () => {
        window.clearInterval(TimerInterval);
      }
    }
    return undefined
  }, [isRunningTimer])

  let duringSeconds = allTimeSeconds - timerSeconds;
  let procent = duringSeconds / allTimeSeconds * 100;
  let lineTimer = Math.ceil(procent);

  const setTimer = (minutes, seconds) => {
    const allTime = minutes * 60 + seconds;
    setTimerSeconds(allTime);
    setAllTimeSeconds(allTime);
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setTimerSeconds(allTimeSeconds)
    setIsRunningTimer(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if(timerSeconds < 0) {
    setIsRunningTimer(false);
    setTimerSeconds(0);
    showModal();
  }

  return (
    <div>
      <div className = 'timer-container'>
      <>
        <Modal 
          title="Well done!" 
          visible={isModalVisible} 
          onOk={handleOk} 
          onCancel={handleCancel}
          centered={true}
          okText={'Start new Timer with previous value'}
          cancelText={'Set new Timer'}
        >
          <img 
            src="./timer-popup-img.svg" 
            width="300px"
            alt="img"
          />
          <p>Time is up!</p>
        </Modal>
        </>
        <TimerInputComponent
          setTimer = {setTimer}
          setCurrentMinutes = {setCurrentMinutes}
          setCurrentSeconds = {setCurrentSeconds}
          currentMinutes = {currentMinutes}
          currentSeconds = {currentSeconds}
          setIsRunningTimer = {setIsRunningTimer}
          isRunningTimer = {isRunningTimer}
        />
        <TimerCountComponent 
          seconds = {timerSeconds}
          lineTimer = {lineTimer}
        />
      </div>
    </div>
  )
}

export default TimerComponent;