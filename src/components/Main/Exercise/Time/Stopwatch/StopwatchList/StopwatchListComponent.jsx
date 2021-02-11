import React from 'react';
import PropTypes from 'prop-types';
import { Row, Space, Card } from 'antd';
import style from '../../Time.module.css';
import antdPropConstants from '../../../../../../constants/antdPropConstants';

const {
  TIME: {
    STOPWATCH: {
      LIST_COMPONENT: {
        ROW_JUSTIFY,
        SPACE_DIRECTION,
        CARD_TITLE,
        CARD_SIZE,
      },
    },
  },
} = antdPropConstants;

const formatTime = (time) => `${(time < 10 ? '0' : '')}${time}`;

const StopwatchListComponent = ({ memoryOfValues }) => (
  <Row justify={ROW_JUSTIFY}>
    <Space direction={SPACE_DIRECTION}>
      <Card
        title={CARD_TITLE}
        size={CARD_SIZE}
        className={style.stopwatchCard}
      >
        <div>
          {memoryOfValues.map((value) => {
            const min = Math.floor(value.secondsValue / 60);
            const sec = Math.floor(value.secondsValue % 60);

            return (
              <p key={value.id} className={style.stopwatchValue}>
                {`${formatTime(min)}:${formatTime(sec)}`}
              </p>
            );
          })}
        </div>
      </Card>
    </Space>
  </Row>
);

StopwatchListComponent.propTypes = {
  memoryOfValues: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default StopwatchListComponent;
