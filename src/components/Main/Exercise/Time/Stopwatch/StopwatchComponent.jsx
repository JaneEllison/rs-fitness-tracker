import React, { useState } from 'react';
import style from '../Time.module.css';
import StopwatchCountComponent from './StopwatchCount/StopwatchCountComponent';
import StopwatchButtonsComponent from './StopwatchButtons/StopwatchButtonsComponent';
import StopwatchListComponent from './StopwatchList/StopwatchListComponent';
import { Row, Col } from 'antd';

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
    <Row gutter={[0, 20]} align="bottom">
      <Col>
        <StopwatchListComponent
          memoryOfValues={memoryOfValues}
        />
      </Col>
      <Col push="2">
        <Row className='col-sm-2'>
          <div className='sp sp-wave'>
            <StopwatchCountComponent
            isRunningStopwatch={isRunningStopwatch}
            changeSeconds={changeSeconds}
            stopwatchSeconds={stopwatchSeconds}
          />
          </div>
        </Row>
        <Row align="center">        
            <StopwatchButtonsComponent
            isRunningStopwatch={isRunningStopwatch}
            setIsRunningStopwatch={setIsRunningStopwatch}
            changeSeconds={changeSeconds}
            addValuesOfSeconds={addValuesOfSeconds}
            deletePreviousValue={deletePreviousValue}
          />
        </Row>
      </Col>
    </Row>
  )
}

export default StopwatchComponent