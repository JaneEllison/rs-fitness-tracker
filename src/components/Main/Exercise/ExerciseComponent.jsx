import React from 'react';
import ExerciseControlComponent from './ExerciseSchedule/ExerciseControlComponent';
import { useSelector } from 'react-redux';
import ExerciseAddComponent from './ExerciseSchedule/ExerciseAddComponent';
import SearchExercisesComponent from './ExerciseSearch/SearchExercisesComponent';
import { Row } from 'antd';

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
      <h1 className="exercise-title">Exercise schedule</h1>
      <Row justify="center" gutter={16} className="exercise-cards">
        {components}
      </Row>
      <Row justify="center">
        <ExerciseAddComponent />
        <SearchExercisesComponent />
      </Row>
    </div>
  );
};

export default ExerciseComponent;
