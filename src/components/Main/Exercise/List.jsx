import React, { useState } from 'react';
import ExerciseAddComponent from './ExerciseAddComponent';
import { useDispatch, useSelector } from 'react-redux';
import { exerciseAddAction, selectDayAction } from '../../../store/exerciseReducer/exerciseReducer';

const List = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: 'first', isComplete: false },
    { id: 2, title: 'two', isComplete: false },
  ]);

  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.selectedDayReducer);
  const days = useSelector((state) => state.exerciseReducer)
  const day = Object.keys(days)[0]

  if(selectedDay === null) {
    dispatch(selectDayAction(day));
  }
  console.log(selectedDay, 'day');
  const globalAddExercise = (exercise) => {
    setTodo([
      ...todo,
      {
        id: Math.floor(Math.random() * 10000),
        title: exercise.title,
        isComplete: false,
      },
    ]);
    console.log('asd', exercise);

    dispatch(exerciseAddAction(exercise.id, exercise.title, exercise.isComplete, selectedDay));
  };

  return (
    <div>
      <h1>TEST</h1>
      {selectedDay !== null ? <ExerciseAddComponent selectedDay={selectedDay} onSubmit={globalAddExercise} /> : null}
    </div>
  );
};


export default List;
