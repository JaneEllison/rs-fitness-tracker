/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Space, Card } from 'antd';
import style from '../../Time.module.css';

const formatTime = (time) => `${(time < 10 ? '0' : '')}${time}`;

const StopwatchListComponent = ({ memoryOfValues }) => (
  <Row justify="center">
    <Space direction="vertical">
      <Card
        title="Time"
        size="small"
        style={{ width: 155, height: 160 }}
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

export default StopwatchListComponent;
