import style from '../../Time.module.css';
import { Row, Space, Card } from 'antd';


const StopwatchListComponent = ({memoryOfValues}) => {
  return (
    <Row justify='center'>
      <Space direction="vertical">
        <Card 
          title="Time"
          size={'small'}
          style={{ width: 155, height:160}
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
    </Row>
    
  )
}

export default StopwatchListComponent;