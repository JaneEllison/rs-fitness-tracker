import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import StopwatchCountComponent from './StopwatchCount/StopwatchCountComponent';
import StopwatchButtonsComponent from './StopwatchButtons/StopwatchButtonsComponent';
import StopwatchListComponent from './StopwatchList/StopwatchListComponent';

const StopwatchComponent = ({ currentTrack, setCurrentTrack, getRandomAudio }) => {
  const [isRunningStopwatch, setIsRunningStopwatch] = useState(false);
  const [stopwatchSeconds, setStopwatchSeconds] = useState(0);
  const [memoryOfValues, setMemoryOfValues] = useState([]);

  const changeSeconds = (seconds) => {
    setStopwatchSeconds(seconds);
  };

  const addValuesOfSeconds = () => {
    setMemoryOfValues(memoryOfValues.concat([{
      secondsValue: stopwatchSeconds,
      id: Date.now(),
    }]));
  };

  const deletePreviousValue = () => {
    if (memoryOfValues.length >= 3) {
      memoryOfValues.shift();
      setMemoryOfValues(memoryOfValues);
    }
    return memoryOfValues;
  };

  return (
    <Row gutter={[0, 10]} align="bottom" justify="center" style={{ width: '80%' }}>
      <Col sm={{ span: 12 }} xs={{ span: 24 }}>
        <StopwatchListComponent
          memoryOfValues={memoryOfValues}
        />
      </Col>
      <Col sm={{ span: 12 }} xs={{ span: 24 }}>
        <StopwatchCountComponent
          isRunningStopwatch={isRunningStopwatch}
          changeSeconds={changeSeconds}
          stopwatchSeconds={stopwatchSeconds}
        />
        <Row align="center">
          <StopwatchButtonsComponent
            stopwatchSeconds={stopwatchSeconds}
            isRunningStopwatch={isRunningStopwatch}
            setIsRunningStopwatch={setIsRunningStopwatch}
            changeSeconds={changeSeconds}
            addValuesOfSeconds={addValuesOfSeconds}
            deletePreviousValue={deletePreviousValue}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
            getRandomAudio={getRandomAudio}
          />
        </Row>
      </Col>
    </Row>
  );
};

StopwatchComponent.propTypes = {
  currentTrack: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  getRandomAudio: PropTypes.func.isRequired,
};

export default StopwatchComponent;
