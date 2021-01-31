import React, { useState } from 'react';
import ExerciseControlComponent from './ExerciseSchedule/ExerciseScheduleComponent';
import { useSelector } from 'react-redux';
import ExerciseAddComponent from './ExerciseSchedule/ExerciseAddForm/ExerciseAddComponent';
import SearchExercisesComponent from './ExerciseSearch/SearchExercisesComponent';
import TimeComponent from './Time/TimeComponent';
import { Row, Col } from 'antd';
import style from './ExerciseComponent.module.css';
import daysList from '../../../constants/daysList';

const ExerciseComponent = () => {

  const exerciseData = useSelector((state) => state.exerciseReducer);
  // const selectedDay = useSelector((state) => state.selectedDayReducer);
  const [selectedDay, setSelectedDay] = useState(daysList[new Date(Date.now()).getDay()].name);
  console.log(selectedDay);
  const components = Object.entries(exerciseData).map(([day, data], index) => {
    return (
      // <Col  sm={{ span: 3, offset: 0}} lg={{ span: 5, offset: 0}} xl={{span: 3, offset: 0,}}>
      // <Col span={3}>
      <ExerciseControlComponent
        selectedDay={selectedDay}
        key={index}
        day={day}
        setSelectedDay={setSelectedDay}
        exercises={data.exercises}
      />
      // </Col>
    );
  });

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Exercise schedule</h1>
      <Row align="middle" justify="space-between" className={style.cards}>
        {components}
      </Row>
      <Row className={style.main_content} justify="space-between">
        <Col className={style.left_content}>
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
