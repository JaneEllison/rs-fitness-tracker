import React from 'react';
import ExerciseControlComponent from './ExerciseSchedule/ExerciseControlComponent';
import { useSelector } from 'react-redux';
import ExerciseListComponent from './ExerciseSchedule/ExerciseListComponent';

const ExerciseComponent = () => {
  const exerciseData = useSelector((state) => state.exerciseReducer);
  const selectedDay = useSelector((state) => state.selectedDayReducer);

  const components = Object.entries(exerciseData).map(([day, data], index) => {
    return (
      <ExerciseControlComponent
        selectedDay={selectedDay}
        key={index}
        day={day}
        exercises={data.exercises}
      />
    );
  });

  return (
    <div className="exercise-wrapper">
      <h1>Exercise schedule</h1>
      {components}
      <ExerciseListComponent />
    </div>
  );
};

export default ExerciseComponent;
