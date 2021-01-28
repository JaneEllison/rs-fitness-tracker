import style from '../../Time.module.css';
import { Space, Card } from 'antd';

const StopwatchListComponent = ({memoryOfValues}) => {
  return (
    <Space direction="vertical">
      <Card 
        className="TimeCard"
        title="Time"
        size={'small'}
        style={{ width: 155, height:180, textAlign: 'center'}
      }>
        <div >
          {memoryOfValues.map((value) => {
            let min = Math.floor(value.secondsValue / 60);
            let sec = Math.floor(value.secondsValue % 60);

            return <p key={value.id} className={style.stopwatchValue}>{
              (min<10 && sec<10)
                ? `0${min}:0${sec}` :
              (min<10)
                ? `0${min}:${sec}` :
              (sec<10)
                ? `${min}:0${sec}`
                : `${min}:${sec}`
            }</p>
            })}
          </div>
        </Card>
      </Space>
  )
}

export default StopwatchListComponent;