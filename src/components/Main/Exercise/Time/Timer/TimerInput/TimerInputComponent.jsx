import { CheckOutlined} from '@ant-design/icons';
import { Typography, Row, Col, InputNumber, Button } from 'antd';
const { Title } = Typography;


function TimerInputComponent(props) {
  let { startTimer, changeCurrentTime, currentMinutes, currentSeconds, 
    timerStarted, setAudio, playAudio } = props;

  return (
    <Col>
      <Row justify="center">
        <Title level={5}> Set Train time</Title> 
      </Row>
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
      <Button 
          type="primary" 
          icon={<CheckOutlined />}
          block={true}
          onClick={() => {
            startTimer(currentMinutes, currentSeconds);
            timerStarted();
            setAudio('./example.mp3', true);
            playAudio();
          }}
        >
          Set timer
        </Button>
  </Col>
  )
}

export default TimerInputComponent 
