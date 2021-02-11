import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Typography } from 'antd';
import './CountSpiner.css';
import style from '../../Time.module.css';
import antdPropConstants from '../../../../../../constants/antdPropConstants';

const {
  TIME: {
    STOPWATCH: {
      COUNT_COMPONENT: {
        DIV_CLASS_NAME,
        ROW_JUSTIFY,
        ROW_ALIGN,
        SVG_CLASS_NAME,
        SVG_VIEWBOX,
        CIRCLE_CX,
        CIRCLE_CY,
        CIRCLE_R,
        CIRCLE_CLASS_NAME,
        CIRCLE_CLASS_NAME_RUNNING,
      },
    },
  },
} = antdPropConstants;

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
    <div className={DIV_CLASS_NAME}>
      <Row
        justify={ROW_JUSTIFY}
        align={ROW_ALIGN}
        className={style.stopwatchCount}
      >
        <svg className={SVG_CLASS_NAME} viewBox={SVG_VIEWBOX}>
          <circle
            cx={CIRCLE_CX}
            cy={CIRCLE_CY}
            r={CIRCLE_R}
            className={CIRCLE_CLASS_NAME}
          />
          {
            (isRunningStopwatch)
              ? (
                <circle
                  cx={CIRCLE_CX}
                  cy={CIRCLE_CY}
                  r={CIRCLE_R}
                  className={CIRCLE_CLASS_NAME_RUNNING}
                />
              )
              : ''
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
