import React from 'react';
import ExerciseActionComponent from './ExerciseActionComponent';
import { useDispatch } from 'react-redux';
import {
  exerciseRemoveAction,
  exerciseCompleteAction,
} from '../../../../store/exerciseDataReducer/exerciseReducer/exerciseActionCreators';
import { selectDayAction } from '../../../../store/exerciseDataReducer/exerciseSelectDayReducer/selectedDayReducer';

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
    <div
      className={day === selectedDay ? 'selected' : ''}
      onClick={() => selectDay()}
    >
      <h2> {day} </h2>
      <ExerciseActionComponent
        day={day}
        exercises={exercises}
        completeExercise={completeExercise}
        removeExercise={removeExercise}
      />
    </div>
  );
};

export default ExerciseControlComponent;
