import React, { useState, useLayoutEffect } from 'react';
import style from '../../Time.module.css';
import { Row, Tooltip, Button } from 'antd';
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import { IoIosSquare, IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io';

const StopwatchButtonsComponent = ({ stopwatchSeconds, setIsRunningStopwatch, changeSeconds, 
  deletePreviousValue, addValuesOfSeconds }) => {
  let audioPlayer;

  const [ isPlaying, setIsPlaying] = useState(false);
  const [ isSoundOn, setIsSoundOn ] = useState(true);
  const [ sound, setSound ] = useState('./example2.mp3');

  const initPlayer = () => {
    audioPlayer = document.getElementById('audioPlayerStopwatch');
  };
  const handlePlayAudio = () => {
    if (audioPlayer.paused || audioPlayer.ended) {
      setIsPlaying(true);
      setTimeout(() => {
      audioPlayer.play();
    }, 0);
    } else {
      setIsPlaying(false);
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
    setIsPlaying(true)
    setSound('./example2.mp3');
    handlePlayAudio()
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
    setSound('./done.mp3');
    initPlayer();
    setTimeout(function () {      
      audioPlayer.play();
    }, 0);
    setIsPlaying(false);
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
        src={sound} 
        type="audio/ogg" />
      {
        (isPlaying)
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