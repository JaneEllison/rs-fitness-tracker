/* eslint-disable react/prop-types */
import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import {
  Typography,
  Row,
  Col,
  InputNumber,
  Button,
} from 'antd';
import style from '../../Time.module.css';

const { Title } = Typography;

function TimerInputComponent(props) {
  const {
    startTimer, changeCurrentTime, currentMinutes, currentSeconds,
    timerStarted, setIsTimerOn,
  } = props;

  const allTimeIsZero = currentSeconds + currentMinutes;

  return (
    <Col>
      <Row justify="center">
        <Title level={5}> Set Train time</Title>
      </Row>
      <form>
        <InputNumber
          className={style.inputTimer}
          onChange={(newValue) => {
            changeCurrentTime(newValue, currentSeconds);
          }}
          value={currentMinutes}
          defaultValue={0}
          size="small"
          min={0}
          max={59}
        />
        <InputNumber
          className={style.inputTimer}
          onChange={(newValue) => {
            changeCurrentTime(currentMinutes, newValue);
          }}
          value={currentSeconds}
          defaultValue={0}
          size="small"
          min={0}
          max={59}
        />
      </form>
      <Button
        type="primary"
        icon={<CheckOutlined />}
        block
        onClick={() => {
          if (allTimeIsZero) {
            startTimer(currentMinutes, currentSeconds);
            timerStarted();
            setIsTimerOn(true);
          }
        }}
        disabled={!(allTimeIsZero)}
      >
        Set timer
      </Button>
    </Col>
  );
}

export default TimerInputComponent;
