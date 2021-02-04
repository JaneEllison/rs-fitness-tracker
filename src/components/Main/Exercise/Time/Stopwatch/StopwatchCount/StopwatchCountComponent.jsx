import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Typography } from 'antd';
import './CountSpiner.css';
import style from '../../Time.module.css';

const { Title } = Typography;
const formatTime = (time) => `${(time < 10 ? '0' : '')}${time}`;

const StopwatchCountComponent = ({
  changeSeconds,
  stopwatchSeconds,
  isRunningStopwatch,
}) => {
  useEffect(() => {
    if (isRunningStopwatch) {
      const stopwatchInterval = window.setInterval(() => {
        changeSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => window.clearInterval(stopwatchInterval);
    }
    return undefined;
  }, [isRunningStopwatch]);

  const minutes = Math.floor(stopwatchSeconds / 60);
  const seconds = Math.floor(stopwatchSeconds % 60);

  return (
    <div className="wrapper">
      <Row justify="center" align="middle" className={style.stopwatchCount}>
        <svg className="spinerIcon" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="100" className="spinner-track" />
          {
            (isRunningStopwatch) ? <circle cx="250" cy="250" r="100" className="spinner" /> : ''
          }
        </svg>
        <Row>
          <Title className={style.stopwatchTime}>
            {`${formatTime(minutes)}:${formatTime(seconds)}`}
          </Title>
        </Row>
      </Row>
    </div>
  );
};

StopwatchCountComponent.propTypes = {
  stopwatchSeconds: PropTypes.number.isRequired,
  changeSeconds: PropTypes.func.isRequired,
  isRunningStopwatch: PropTypes.bool.isRequired,
};

export default StopwatchCountComponent;
