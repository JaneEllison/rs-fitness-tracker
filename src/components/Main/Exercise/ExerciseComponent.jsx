import React from 'react';
import ExerciseControlComponent from './ExerciseSchedule/ExerciseScheduleComponent';
import { useSelector } from 'react-redux';
import ExerciseAddComponent from './ExerciseSchedule/ExerciseAddForm/ExerciseAddComponent';
import SearchExercisesComponent from './ExerciseSearch/SearchExercisesComponent';
import TimeComponent from './Time/TimeComponent';
import { Row, Col } from 'antd';
import style from './ExerciseComponent.module.css'

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
      <h1 className={style.title}>Exercise schedule</h1>
      <Row justify="space-between" gutter={16} className="exercise-cards">
        {components}
      </Row>
      <Row justify='space-between' gutter={[0,30]}>
        <Col>
          <ExerciseAddComponent />
          <TimeComponent />
        </Col>
        <Col>
          <SearchExercisesComponent />
        </Col>
      </Row>
    </div>
  );
};

export default ExerciseComponent;
