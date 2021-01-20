import React, { useState, useEffect } from 'react';
import { Tooltip, Button, Space, Card } from 'antd';
import { CaretRightOutlined, PauseOutlined, PoweroffOutlined, SoundOutlined } from '@ant-design/icons';


const StopwatchComponent = ({setAudio, playAudio}) => {
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0);
  const [isRunningStopwatch, setIsRunningStopwatch] = useState(false);
  const [memoryOfValues, setMemoryOfValues] = useState([]);

  let minutes = Math.floor(stopwatchSeconds / 60);
  let seconds = Math.floor(stopwatchSeconds % 60);

  useEffect(()=> {
    if(isRunningStopwatch) {
      const stopwatchInterval = window.setInterval(() => {
        setStopwatchSeconds((stopwatchSeconds) => stopwatchSeconds + 1)
      }, 1000);
      return () => window.clearInterval(stopwatchInterval);
    }
    return undefined;
  }, [isRunningStopwatch]);

  const addValuesOfSeconds = (secondsValue) => {
    setMemoryOfValues(memoryOfValues.concat([{
      secondsValue,
      id: Date.now(),
    }]))
  };

  const deletePreviousValue = () => {
    if(memoryOfValues.length >= 3) {
      memoryOfValues.shift();
      setMemoryOfValues(memoryOfValues);
    }
    return memoryOfValues;
  }

  const stopStopwatch = () => {
    setIsRunningStopwatch(false);
    deletePreviousValue();
    addValuesOfSeconds(stopwatchSeconds);
    setAudio('./done.mp3', false);
    playAudio();
    setStopwatchSeconds(0);
  }

  const [ sound, setSound ] = useState(true);

  const toggleButtons = () => {
    setSound(!sound)
  }

  return (
    <div className="stopwatch-wrapper">
      <div className="time-circle">
        <div className="time">
          {
            (minutes<10 && seconds<10)
              ? `0${minutes}:0${seconds}` :
            (minutes<10)
              ? `0${minutes}:${seconds}` :
            (seconds<10)
              ? `${minutes}:0${seconds}`
              : `${minutes}:${seconds}`
          }
        </div>
      </div>
      <div className="buttons">
        {
          (isRunningStopwatch)
            ? <Tooltip title="Pause">
                <Button 
                  type="primary" 
                  shape="circle" 
                  icon={<PauseOutlined />} 
                  onClick={() => {
                    setIsRunningStopwatch(false)
                    playAudio()
                  }}
                />
              </Tooltip> 
            : <Tooltip title="Start">
                <Button 
                  type="primary" 
                  shape="circle" 
                  icon={<CaretRightOutlined />}
                  onClick={() => {
                    setIsRunningStopwatch(true)
                    setAudio('./example2.mp3')
                    playAudio()
                  }}
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
        (sound)
          ? <Tooltip title="Sound off">
              <Button 
                type="primary"
                shape="circle"
                icon={<SoundOutlined />}
                onClick={() => {
                  playAudio()
                  toggleButtons();
                }}
              />
            </Tooltip>
          : <Tooltip title="Sound on">
              <Button 
                type="primary"
                shape="circle"
                icon={<SoundOutlined />}
                onClick={() => {
                  playAudio()
                  toggleButtons();
                }}
              />
            </Tooltip>
        }
      </div>
      <Space direction="vertical">
        <Card title="Time" style={{ width: 200, height:215 }}>
          <div>
            {memoryOfValues.map((value) => {
            let min = Math.floor(value.secondsValue / 60);
            let sec = Math.floor(value.secondsValue % 60);

            return <p key={value.id}>{
              (min<10 && sec<10)
                ? `0${min}:0${sec}` :
              (min<10)
                ? `0${min}:${sec}` :
              (sec<10)
                ? `${min}:0${sec}`
                : `${min}:${sec}`
            }</p>
            })}
          </div>
        </Card>
      </Space>
    </div>
  )
}

export default StopwatchComponent