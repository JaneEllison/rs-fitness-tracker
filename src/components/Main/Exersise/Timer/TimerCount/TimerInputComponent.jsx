import React from 'react';
import { InputNumber, Tooltip, Button } from 'antd';
import { CheckOutlined, UndoOutlined, PauseOutlined, CaretRightOutlined, StopOutlined, SoundOutlined } from '@ant-design/icons';

function TimerInputComponent({onCreate, trainMinutesValue, trainSecondsValue}) {
  let currentTrainMinutesValue = trainMinutesValue;
  let currentTrainSecondsValue = trainSecondsValue;

  console.log(currentTrainSecondsValue)

  return (
    <div>
      <span>Set Train time</span> 
      <form>
        <InputNumber 
          onChange={(newValue) => {
            currentTrainMinutesValue = newValue
          }}
          defaultValue={currentTrainMinutesValue}
          size="small"
          min={0}
          max={59}
        />
        <InputNumber 
          onChange={(newValue) => {
            currentTrainSecondsValue = newValue
          }}
          defaultValue={currentTrainSecondsValue}
          size="small"
          min={0}
          max={59}
        />
      </form>
    
    <div>
      <Button 
        type="primary" 
        icon={<CheckOutlined />}
        onClick={ () => {
          onCreate(currentTrainMinutesValue, currentTrainSecondsValue) 
        }}
      >
        Set timer
      </Button>
    </div>

    

    <Tooltip title="Repeat timer">
      <Button type="primary" shape="circle" icon={<UndoOutlined />} />
    </Tooltip>
    <Tooltip title="Pause timer">
      <Button type="primary" shape="circle" icon={<PauseOutlined />} />
    </Tooltip>
    {/* <Tooltip title="Play timer">
      <Button type="primary" shape="circle" icon={<CaretRightOutlined />} />
    </Tooltip> */}
    <Tooltip title="Stop timer">
      <Button type="primary" shape="circle" icon={<StopOutlined />} />
    </Tooltip>
    <Tooltip title="Sound on">
      <Button type="primary" shape="circle" icon={<SoundOutlined />} />
    </Tooltip>
  </div>
  )
}

export default TimerInputComponent 
