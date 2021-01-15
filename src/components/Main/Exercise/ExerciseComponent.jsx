import React from 'react'
import ExerciseListComponent from './ExerciseListComponent';
// import ExerciseAddComponent from './ExerciseAddComponent';
import { useSelector } from 'react-redux';
import List from './List';

const ExerciseComp = () => {
  const exerciseData = useSelector((state) => state.exerciseReducer);
  const selectedDay = useSelector((state) => state.selectedDayReducer);

  const components = Object.entries(exerciseData).map(([day, data], index) => {
    return <ExerciseListComponent selectedDay={selectedDay} key={index} day={day} exercises={data.exercises} />
  })

  return (
    <div className='exercise-wrapper'>
      {components}
      <List />
    </div>
  );
}

export default ExerciseComp;