import { Progress } from 'antd';

const TimerCountComponent = ({minutes, seconds, lineTimer}) => {
  return (
    <div className='timer-component'>
      <Progress type="circle" percent={lineTimer}></Progress>

      <div className="timer-count">
        <span>
          {
            (minutes<10 && seconds<10)
              ? `0${minutes}:0${seconds}` :
            (minutes<10)
              ? `0${minutes}:${seconds}` :
            (seconds<10)
              ? `${minutes}:0${seconds}`
              : `${minutes}:${seconds}`
          }
        </span>
      </div>
    </div>
  )
}

export default TimerCountComponent;


//<CaretRightOutlined style = {{fontSize: '120px'}}/>
//import { CaretRightOutlined } from '@ant-design/icons';

