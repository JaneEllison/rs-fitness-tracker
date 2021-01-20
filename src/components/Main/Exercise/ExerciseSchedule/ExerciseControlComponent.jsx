import React from 'react';
import ExerciseActionComponent from './ExerciseActionComponent';
import { useDispatch } from 'react-redux';
import {
  exerciseRemoveAction,
  exerciseCompleteAction,
} from '../../../../store/exerciseDataReducer/exerciseReducer/exerciseActionCreators';
import { selectDayAction } from '../../../../store/exerciseDataReducer/exerciseSelectDayReducer/selectedDayReducer';
import { Card } from 'antd';

const ExerciseControlComponent = ({ day, exercises, selectedDay }) => {
  const dispatch = useDispatch();

  const removeExercise = (id) => {
    dispatch(exerciseRemoveAction(id, day));
  };

  const completeExercise = (id) => {
    dispatch(exerciseCompleteAction(id, day));
  };

  const selectDay = () => {
    dispatch(selectDayAction(day));
  };

  return (
    <div onClick={() => selectDay()} style={{ padding: 3 }}>
      <Card
        className={
          day === selectedDay ? 'exercise-content selected' : 'exercise-content'
        }
        size={'small'}
        title={day}
        style={{ width: 155, cursor: 'pointer', height: 260 }}
      >
        <ExerciseActionComponent
          day={day}
          exercises={exercises}
          completeExercise={completeExercise}
          removeExercise={removeExercise}
        />
      </Card>
    </div>
  );
};

export default ExerciseControlComponent;
