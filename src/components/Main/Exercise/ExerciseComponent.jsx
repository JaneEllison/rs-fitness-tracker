import React from 'react'
import ExerciseListComponent from './ExerciseListComponent';
import { useSelector } from 'react-redux';

const ExerciseComp = () => {
  const exerciseData = useSelector((state) => state.exerciseReducer);
  const selectedDay = useSelector((state) => state.selectedDayReducer);

  const components = Object.entries(exerciseData).map(([day, data], index) => {
    return <ExerciseListComponent selectedDay={selectedDay} key={index} day={day} exercises={data.exercises} />
  })

  return (
    <div className='exercise-wrapper'>
      {components}
    </div>
  );
}

export default ExerciseComp;