// import React from 'react';
import { InputNumber, Tooltip, Button } from 'antd';
import { CheckOutlined, UndoOutlined, PauseOutlined, CaretRightOutlined, PoweroffOutlined, SoundOutlined } from '@ant-design/icons';

function TimerInputComponent(props) {
  let {startTimer, changeCurrentTime, currentMinutes, currentSeconds, isTimerStarted, isRunningTimer} = props;

  return (
    <div>
      <span>Set Train time</span> 
      <form>
        <InputNumber 
          onChange={(newValue) => {
            changeCurrentTime(newValue, currentSeconds)
          }}
          value={currentMinutes}
          defaultValue={0}
          size="small"
          min={0}
          max={59}
        />
        <InputNumber 
          onChange={(newValue) => {
            changeCurrentTime(currentMinutes, newValue)
          }}
          value={currentSeconds}
          defaultValue={0}
          size="small"
          min={0}
          max={59}
        />
      </form>
    <div>
      <Button 
          type="primary" 
          icon={<CheckOutlined />}
          onClick={() => {
            startTimer(currentMinutes, currentSeconds);
            isTimerStarted(true);
          }}
        >
          Set timer
        </Button>
    </div>    

    <Tooltip title="Repeat timer">
      <Button 
        type="primary" 
        shape="circle" 
        icon={<UndoOutlined />}
        onClick={() => {
          startTimer(currentMinutes, currentSeconds);
          isTimerStarted(true);
        }}
      />
    </Tooltip>
    {
      (isRunningTimer)
      ? <Tooltip title="Pause timer">
        <Button 
          type="primary" 
          shape="circle" 
          icon={<PauseOutlined />}
          onClick={() => {
            isTimerStarted(false);
          }}
        />
      </Tooltip>
      : <Tooltip title="Play timer">
        <Button 
          type="primary" 
          shape="circle" 
          icon={<CaretRightOutlined />}
          onClick={() => {
            isTimerStarted(true);
          }}
        />
      </Tooltip>
    }
    <Tooltip title="Stop timer">
      <Button 
        type="primary" 
        shape="circle" 
        icon={<PoweroffOutlined />}
        onClick={() => {
          changeCurrentTime(0, 0)
          startTimer(0, 0);
          isTimerStarted(false);
        }}
      />
    </Tooltip>
    <Tooltip title="Sound on">
      <Button type="primary" shape="circle" icon={<SoundOutlined />} />
    </Tooltip>
  </div>
  )
}

export default TimerInputComponent 
