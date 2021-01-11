import React, { useState } from 'react';
import ExerciseFormComponent from './ExerciseFormComponent';
import { DeleteOutlined } from '@ant-design/icons'
import { FormOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux';

function ExerciseActionComponent({ exercises, completeExercise, removeExercise, updateExercise }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = (value) => {
    updateExercise(edit.id, value)

    setEdit({
      id: null,
      value: ''
    })
  }

  // if (edit.id) {
  //   return <ExerciseFormComponent edit={edit} onSubmit={submitUpdate} />
  // }
  
  return exercises.map((exercise, index) => (
    <div
      className={exercise.isComplete ? "exercise-row complete" : "exercise-row"}
      key={index}>
      <div key={exercise.id} onClick={() => completeExercise(exercise.id)}>
        {exercise.text}
      </div>
      <div>
        <DeleteOutlined 
          onClick={() => removeExercise(exercise.id)}
          className='delete-icon'
        />
        <FormOutlined 
          onClick={() => setEdit({ id: exercise.id, value: exercise.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
}

export default ExerciseActionComponent
