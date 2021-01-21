import React, { useState } from 'react';
import { Space, Card } from 'antd';
import StopwatchCountComponent from './StopwatchCount/StopwatchCountComponent';
import StopwatchButtonsComponent from './StopwatchButtons/StopwatchButtonsComponent';

const StopwatchComponent = () => {
  const [isRunningStopwatch, setIsRunningStopwatch] = useState(false);
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0);
  const [memoryOfValues, setMemoryOfValues] = useState([]);

  const changeSeconds = (seconds) => {
    setStopwatchSeconds(seconds)
  };

  const addValuesOfSeconds = () => {
    setMemoryOfValues(memoryOfValues.concat([{
      secondsValue: stopwatchSeconds,
      id: Date.now(),
    }]))
  };

  // const deletePreviousValue = () => {
  //   if(memoryOfValues.length >= 3) {
  //     memoryOfValues.shift();
  //     setMemoryOfValues(memoryOfValues);
  //   }
  //   return memoryOfValues;
  // }

  return (
    <div className="stopwatch-wrapper">
      <StopwatchCountComponent
        isRunningStopwatch={isRunningStopwatch}
        changeSeconds={changeSeconds}
        stopwatchSeconds={stopwatchSeconds}
      />
      <StopwatchButtonsComponent
        isRunningStopwatch={isRunningStopwatch}
        setIsRunningStopwatch={setIsRunningStopwatch}
        changeSeconds={changeSeconds}
        addValuesOfSeconds={addValuesOfSeconds}
      />
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