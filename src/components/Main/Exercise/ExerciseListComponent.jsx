import React, { useState } from 'react';
import ExerciseActionComponent from './ExerciseActionComponent';
import ExerciseFormComponent from './ExerciseFormComponent';
import { useDispatch } from 'react-redux';
import { exerciseAction, exerciseRemoveAction } from '../../../store/exerciseReducer/exerciseReducer';

const ExerciseListComponent = ({ day, exercises }) => {
  // const [exercises, setExercise] = useState([]);
  console.log(day);
  const dispatch = useDispatch();
  
  const addExercise = (exercise) => {
    if (!exercise.text || /^\s*$/.test(exercise.text)) {
      return;
    }

    dispatch(exerciseAction(exercise.id, exercise.text, day))
  };

  const updateExercise = (idExercise, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    // setExercise(prev => prev.map((item) => (item.id === idExercise ? newValue : item)));
    
  }

  const removeExercise = (id) => {
    // const removeArr = [...exercises].filter(exercise => exercise.id !== id);

    dispatch(exerciseRemoveAction(id, day))
  }

  const completeExercise = (id) => {
    let updatedExercise = exercises.map((el) => {
      if (el.id === id) {
        el.isComplete = !el.isComplete;
      }
      return el
    });

    // setExercise(updatedExercise);
  }

  return (
    <div>
        <h1> { day } Exercise schedule</h1>
        <ExerciseFormComponent onSubmit={addExercise} />
        <ExerciseActionComponent
          exercises={exercises}
          completeExercise={completeExercise}
          removeExercise={removeExercise}
          updateExercise={updateExercise}
        />
    </div>
  );
}

export default ExerciseListComponent;
