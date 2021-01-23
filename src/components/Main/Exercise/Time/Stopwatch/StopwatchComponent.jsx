import React, { useState } from 'react';
import StopwatchCountComponent from './StopwatchCount/StopwatchCountComponent';
import StopwatchButtonsComponent from './StopwatchButtons/StopwatchButtonsComponent';
import StopwatchListComponent from './StopwatchList/StopwatchListComponent';

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

  const deletePreviousValue = () => {
    if(memoryOfValues.length >= 3) {
      memoryOfValues.shift();
      setMemoryOfValues(memoryOfValues);
    }
    return memoryOfValues;
  }

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
        deletePreviousValue={deletePreviousValue}
      />
      <StopwatchListComponent
        memoryOfValues={memoryOfValues}
      />
    </div>
  )
}

export default StopwatchComponent