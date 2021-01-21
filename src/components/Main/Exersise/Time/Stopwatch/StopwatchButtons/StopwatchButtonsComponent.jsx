import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Tooltip, Button } from 'antd';
import { CaretRightOutlined, PauseOutlined, PoweroffOutlined, SoundOutlined } from '@ant-design/icons';


const StopwatchButtonsComponent = ({ isRunningStopwatch, setIsRunningStopwatch, changeSeconds, 
  deletePreviousValue, addValuesOfSeconds }) => {
  let audioPlayer;

  const [ isPlaying, setIsPlaying] = useState(false);
  const [ isSoundOn, setIsSoundOn ] = useState(true);

  // const [ sound, setSound ] = useState('');

  const initPlayer = () => {
    audioPlayer = document.getElementById('audioPlayer');
  };
  const handlePlayAudio = () => {
    if (audioPlayer.paused || audioPlayer.ended) {
      audioPlayer.play();
      setIsPlaying(true);
    } else {
      audioPlayer.pause();
      setIsPlaying(false);
    }
  };

    // useEffect(
    //   () => {
    //     handlePlayAudio();
    //   },
    //   [sound]
    // );
  
  useLayoutEffect(() => {
    initPlayer();
  });


  const startStopwatch = () => {
    setIsRunningStopwatch(true);
    handlePlayAudio()
  };

  const pauseStopwatch = () => {
    setIsRunningStopwatch(false);
    handlePlayAudio()
  };
  
  const stopStopwatch = () => {
    deletePreviousValue();
    addValuesOfSeconds();
    setIsRunningStopwatch(false);
    changeSeconds(0);
    audioPlayer.pause();
    audioPlayer.currentTime = 0.0;
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
      >
        <source src='example2.mp3' type="audio/ogg" />
      </audio>
      {
        (isRunningStopwatch && isPlaying)
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