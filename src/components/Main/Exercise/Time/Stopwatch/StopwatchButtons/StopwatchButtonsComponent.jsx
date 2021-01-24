import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Tooltip, Button } from 'antd';
import { CaretRightOutlined, PauseOutlined, PoweroffOutlined, SoundOutlined } from '@ant-design/icons';


const StopwatchButtonsComponent = ({ isRunningStopwatch, setIsRunningStopwatch, changeSeconds, 
  deletePreviousValue, addValuesOfSeconds }) => {
  let audioPlayer;

  const [ isPlaying, setIsPlaying] = useState(false);
  const [ isSoundOn, setIsSoundOn ] = useState(true);

  const [ sound, setSound ] = useState('./example2.mp3');


  const initPlayer = () => {
    audioPlayer = document.getElementById('audioPlayer');
  };
  const handlePlayAudio = () => {
    if (audioPlayer.paused || audioPlayer.ended) {
      setIsPlaying(true);
      setTimeout(function () {
      audioPlayer.play();
    }, 0);
    } else {
      setIsPlaying(false);
      setTimeout(function () {      
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
    <div className="buttons">
      <audio
        id="audioPlayer"
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
      <Tooltip title="Stop">
        <Button 
          type="primary" 
          shape="circle" 
          icon={<PoweroffOutlined />}
          onClick={stopStopwatch}
        />
      </Tooltip>
      {
        (isSoundOn)
          ? <Tooltip title="Sound off">
              <Button 
                type="primary"
                shape="circle"
                icon={<SoundOutlined />}
                onClick={mutedSound}
              />
            </Tooltip>
          : <Tooltip title="Sound on">
              <Button 
                type="primary"
                shape="circle"
                icon={<SoundOutlined />}
                onClick={mutedSound}
              />
            </Tooltip>
      }
    </div>
  )
}

export default StopwatchButtonsComponent;