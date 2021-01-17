import React from 'react';
import ExerciseAddComponent from './ExerciseListComponent';
import { useDispatch, useSelector } from 'react-redux';
import { exerciseAddAction } from '../../../../store/exerciseDataReducer/exerciseReducer/exerciseActionCreators';
import { selectDayAction } from '../../../../store/exerciseDataReducer/exerciseSelectDayReducer/selectedDayReducer';

const List = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.selectedDayReducer);
  const days = useSelector((state) => state.exerciseReducer);
  const defaultDay = Object.keys(days)[0];

  if (selectedDay === null) {
    dispatch(selectDayAction(defaultDay));
  };

  const globalAddExercise = (exercise) => {
    dispatch(
      exerciseAddAction(
        exercise.id,
        exercise.title,
        exercise.isComplete,
        selectedDay
      )
    );
  };

  return (
    <div>
      <h2>Add exercise for the day</h2>
      {selectedDay !== null ? (
        <ExerciseAddComponent
          selectedDay={selectedDay}
          onSubmit={globalAddExercise}
        />
      ) : null}
    </div>
  );
};

export default List;
