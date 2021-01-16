// import React from 'react';
import { InputNumber, Tooltip, Button } from 'antd';
import { CheckOutlined, UndoOutlined, PauseOutlined, CaretRightOutlined, PoweroffOutlined, SoundOutlined } from '@ant-design/icons';

function TimerInputComponent(props) {
  let {setTimer, setCurrentMinutes, setCurrentSeconds, currentMinutes, currentSeconds, setIsRunningTimer, isRunningTimer} = props;
  
  return (
    <div>
      <span>Set Train time</span> 
      <form>
      <InputNumber 
          onChange={(newValue) => {
            setCurrentMinutes(newValue)
          }}
          value={currentMinutes}
          defaultValue={0}
          size="small"
          min={0}
          max={59}
        />
        <InputNumber 
          onChange={(newValue) => {
            setCurrentSeconds(newValue)
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
            setTimer(currentMinutes, currentSeconds);
            setIsRunningTimer(true);
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
          setTimer(currentMinutes, currentSeconds);
          setIsRunningTimer(true);
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
              setIsRunningTimer(false);
            }}
          />
        </Tooltip>
      : <Tooltip title="Play timer">
          <Button 
            type="primary" 
            shape="circle" 
            icon={<CaretRightOutlined />}
            onClick={() => {
              setIsRunningTimer(true);
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
          setCurrentMinutes(0)
          setCurrentSeconds(0)
          setTimer(0, 0);
          setIsRunningTimer(false);
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
