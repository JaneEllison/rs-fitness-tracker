import { InputNumber, Button } from 'antd';
import { CheckOutlined} from '@ant-design/icons';

function TimerInputComponent(props) {
  let { startTimer, changeCurrentTime, currentMinutes, currentSeconds, 
    timerStarted, setAudio, playAudio } = props;

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
            timerStarted();
            setAudio('./example.mp3', true);
            playAudio();
          }}
        >
          Set timer
        </Button>
    </div>    
  </div>
  )
}

export default TimerInputComponent 
