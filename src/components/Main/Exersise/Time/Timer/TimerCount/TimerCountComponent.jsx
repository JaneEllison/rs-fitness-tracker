import { Progress } from 'antd';

const TimerCountComponent = ({seconds, lineTimer}) => {
  let currentMinutes = Math.floor(seconds / 60);
  let currentSeconds = Math.floor(seconds % 60);

  return (
    <div className='timer-component'>
      <Progress type="circle" percent={lineTimer}></Progress>

      <div className="timer-count">
        <span>
          {
            (currentMinutes<10 && currentSeconds<10)
              ? `0${currentMinutes}:0${currentSeconds}` :
            (currentMinutes<10)
              ? `0${currentMinutes}:${currentSeconds}` :
            (currentSeconds<10)
              ? `${currentMinutes}:0${currentSeconds}`
              : `${currentMinutes}:${currentSeconds}`
          }
        </span>
      </div>
    </div>
  )
}

export default TimerCountComponent;

