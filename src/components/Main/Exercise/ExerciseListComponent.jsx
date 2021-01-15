import React from 'react';
import ExerciseActionComponent from './ExerciseActionComponent';
import ExerciseFormComponent from './ExerciseFormComponent';
import { useDispatch } from 'react-redux';
import {
  exerciseAddAction,
  exerciseRemoveAction,
  exerciseCompleteAction,
  selectDayAction,
} from "../../../store/exerciseReducer/exerciseReducer";

const ExerciseListComponent = ({ day, exercises, selectedDay }) => {
  const dispatch = useDispatch();

  const addExercise = (exercise) => {
    if (!exercise.text || /^\s*$/.test(exercise.text)) {
      return;
    }
    console.log(exercise, 'form,');
    dispatch(exerciseAddAction(exercise.id, exercise.text, day, exercise.isComplete))
  };

  const removeExercise = (id) => {
    dispatch(exerciseRemoveAction(id, day))
  }

  const completeExercise = (id) => {
    dispatch(exerciseCompleteAction(id, day))
  }

  const selectDay = () => {
    dispatch(selectDayAction(day));
  }

  return (
    <div className={day === selectedDay ? 'selected' : ''} onClick={() => selectDay()}>
        <h1> { day } Exercise schedule</h1>
        <ExerciseFormComponent onSubmit={addExercise} />
        <ExerciseActionComponent
          day={day}
          exercises={exercises}
          completeExercise={completeExercise}
          removeExercise={removeExercise}
        />
    </div>
  );
}

export default ExerciseListComponent;
