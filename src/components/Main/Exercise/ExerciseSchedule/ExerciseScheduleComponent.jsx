import React from 'react';
import ExerciseActionComponent from './ExerciseCards/ExerciseActionComponent';
import { useDispatch } from 'react-redux';
import {
  exerciseRemoveAction,
  exerciseCompleteAction,
} from '../../../../store/exerciseDataReducer/exerciseReducer/exerciseActionCreators';
import { selectDayAction } from '../../../../store/exerciseDataReducer/exerciseSelectDayReducer/selectedDayReducer';
import { Card, Col } from 'antd';
import style from './ExerciseSchedule.module.css'
import moduleName from './ExerciseAnt.css'

const ExerciseControlComponent = ({ day, exercises, selectedDay, setSelectedDay }) => {
  console.log(day, exercises, selectedDay);
  const dispatch = useDispatch();

  const removeExercise = (id) => {
    dispatch(exerciseRemoveAction(id, day));
  };

  const completeExercise = (id) => {
    dispatch(exerciseCompleteAction(id, day));
  };

  const selectDay = () => {
    setSelectedDay(day);
  };

  return (
    <Col className={style.content_wrapper}onClick={() => selectDay()}>
      <Card
        className={
          day === selectedDay ? [style.content, style.selected] : style.content
        }
        size={'small'}
        title={day}
      >
        <ExerciseActionComponent
          day={day}
          exercises={exercises}
          completeExercise={completeExercise}
          removeExercise={removeExercise}
        />
      </Card>
    </Col>
  );
};

export default ExerciseControlComponent;
