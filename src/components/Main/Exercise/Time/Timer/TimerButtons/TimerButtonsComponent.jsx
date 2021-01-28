import { Row, Tooltip, Button } from 'antd';
import style from '../../Time.module.css';
import { UndoOutlined, PauseOutlined, CaretRightOutlined } from '@ant-design/icons';
import { IoIosSquare, IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io';

function TimerButtonsComponent(props) {
  let {startTimer, changeCurrentTime, currentMinutes, currentSeconds, timerStarted, 
    isRunningTimer, setIsRunningTimer, handlePlayAudio, initPlayer, mutedSound, isSoundOn
    } = props;

  const timerStoped = () => {
    setIsRunningTimer(false);
    handlePlayAudio()
  }

  const repeatTimer = () => {
    setIsRunningTimer(true);
    startTimer(currentMinutes, currentSeconds);
    timerStarted();
    initPlayer()
  };

  const runTimer = () => {
    setIsRunningTimer(true);
    handlePlayAudio()
  }

  const pauseTimer = () => {
    timerStoped()
  };

  const stopTimer = () => {
    changeCurrentTime(0, 0)
    startTimer(0, 0);
    timerStoped();
  };

  return (
    <Row justify="center">
      <Tooltip title="Repeat timer">
        <Button 
          type="primary" 
          shape="circle" 
          icon={<UndoOutlined />}
          onClick={repeatTimer}
        />
      </Tooltip>
      {
        (isRunningTimer)
        ? <Tooltip title="Pause timer">
          <Button 
            type="primary" 
            shape="circle" 
            icon={<PauseOutlined />}
            onClick={pauseTimer}
          />
        </Tooltip>
        : <Tooltip title="Start timer">
          <Button 
            type="primary" 
            shape="circle" 
            icon={<CaretRightOutlined />}
            onClick={runTimer}           
          />
        </Tooltip>
      }
      <Tooltip title="Stop timer" className={style.timeBtn}>
        <Button 
          type="primary" 
          shape="circle" 
          icon={<IoIosSquare />}
          onClick={stopTimer}
          disabled={isRunningTimer ? false : true}
        />
      </Tooltip>
      {
        (isSoundOn)
          ? <Tooltip title="Sound on" className={style.timeBtn}>
              <Button 
                type="primary"
                shape="circle"
                icon={<IoMdVolumeHigh />}
                onClick={mutedSound}
              />
            </Tooltip>
          : <Tooltip title="Sound off" className={style.timeBtn}>
              <Button 
                type="primary"
                shape="circle"
                icon={<IoMdVolumeOff />}
                onClick={mutedSound}
              />
            </Tooltip>
      }
  </Row>
  )
}

export default TimerButtonsComponent 