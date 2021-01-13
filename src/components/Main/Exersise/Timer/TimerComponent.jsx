import React from 'react';
import './Relax.css';
import WeatherComponent from './Weather/WeatherComponent';
import TimerCountComponent from './TimerCount/TimerCountComponent';
import TimerInputComponent from './TimerCount/TimerInputComponent';

const TimerComponent = () => {


  
  const [ trainMinutesValue, setTrainMinutesValue ] = React.useState(0);
  const [ trainSecondsValue, setTrainSecondsValue ] = React.useState(0);
  const [ BreakMinutes, setBreakMinutes ] = React.useState(0);
  const [ BreakSeconds, setBreakSeconds ] = React.useState(0);

  const [ seconds, setSeconds ] = React.useState(trainSecondsValue);
  const [ minutes, setMinutes ] = React.useState(trainMinutesValue);

  let [ lineTimer, setLineTimer ] = React.useState(0);
  // const allSeconds = (initialMinutes * 60) + initialSeconds;

  React.useEffect(()=>{

    let TimerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          // alert("Время закончилось");
          clearInterval(TimerInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } 

      // let currentSeconds = (minutes * 60) + seconds;
      // let duringSeconds = allSeconds - currentSeconds;
      // let procent = duringSeconds / allSeconds * 100;
      // setLineTimer(lineTimer = Math.ceil(procent));

    }, 1000)

    return ()=> {
      clearInterval(TimerInterval);
    };
  });

  function onCreate (trainMinutes, trainSeconds) {
    console.log(trainMinutes, trainSeconds)

    setTrainMinutesValue(trainMinutes)
    setTrainSecondsValue(trainSeconds)

    console.log(trainMinutes, trainSeconds)


    setMinutes(trainMinutes)
    setSeconds(trainSeconds)

    // StartTimer()
  }

  return (
    <div className = 'relax-container'>
      <TimerInputComponent 
        onCreate = {onCreate}
        trainMinutesValue = {trainMinutesValue}
        trainSecondsValue = {trainSecondsValue}
      />
      <TimerCountComponent 
        minutes = {minutes}
        seconds = {seconds}
        lineTimer = {lineTimer}
      />
      {/* <WeatherComponent /> */}
    </div>
  );
};

export default TimerComponent;



