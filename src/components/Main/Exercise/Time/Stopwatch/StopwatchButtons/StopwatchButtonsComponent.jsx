import React, { useState, useLayoutEffect } from 'react';
import style from '../../Time.module.css';
import { Row, Tooltip, Button } from 'antd';
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import { IoIosSquare, IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io';

const StopwatchButtonsComponent = ({ stopwatchSeconds, setIsRunningStopwatch, changeSeconds, 
  deletePreviousValue, addValuesOfSeconds, isRunningStopwatch, currentTrack, setCurrentTrack, 
  getRandomAudio }) => {
  let audioPlayer;

  const [ isSoundOn, setIsSoundOn ] = useState(true);

  const initPlayer = () => {
    audioPlayer = document.getElementById('audioPlayerStopwatch');
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

  const startStopwatch = () => {
    setIsRunningStopwatch(true);
    setTimeout(()=>{
      getRandomAudio();
      handlePlayAudio();
    }, 0);
  };

  const pauseStopwatch = () => {
    handlePlayAudio()
    setIsRunningStopwatch(false);
  };

  const stopStopwatch = () => {
    deletePreviousValue();
    addValuesOfSeconds();
    setIsRunningStopwatch(false);
    changeSeconds(0);
    setCurrentTrack('./music/done.mp3');
    initPlayer();
    setTimeout(function () {      
      audioPlayer.play();
    }, 0);
  };

  const mutedSound = () => {
    (isSoundOn) ? audioPlayer.muted=true : audioPlayer.muted=false
    setIsSoundOn(!isSoundOn)
  }

  return (
    <Row justify="center">
      <audio
        id="audioPlayerStopwatch"
        preload="metadata"
        src={currentTrack} 
        type="audio/ogg" />
      {
        (isRunningStopwatch)
          ? <Tooltip title="Pause">
              <Button
                type="primary" 
                shape="circle" 
                icon={<PauseOutlined />} 
                onClick={pauseStopwatch}
              />
            </Tooltip> 
          : <Tooltip title="Start">
              <Button
                type="primary" 
                shape="circle" 
                icon={<CaretRightOutlined />}
                onClick={startStopwatch}
              />
            </Tooltip>
      }
      <Tooltip title="Stop" className={style.timeBtn}>
        <Button
          type="primary" 
          shape="circle" 
          icon={<IoIosSquare />}
          onClick={stopStopwatch}
          disabled={stopwatchSeconds ? false : true}
        />
      </Tooltip>
      {
        (isSoundOn)
          ? <Tooltip title="Sound on" className={style.timeBtn}>
              <Button
                type="primary"
                shape="circle"
                icon={<IoMdVolumeHigh />}
                onClick={mutedSound}
              />
            </Tooltip>
          : <Tooltip title="Sound off" className={style.timeBtn}>
              <Button 
                type="primary"
                shape="circle"
                icon={<IoMdVolumeOff />}
                onClick={mutedSound}
              />
            </Tooltip>
      }
    </Row>
  )
}

export default StopwatchButtonsComponent;