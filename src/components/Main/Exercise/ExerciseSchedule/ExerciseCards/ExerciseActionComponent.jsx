import React, { useState, useEffect } from 'react';
import ExerciseUpdateComponent from './ExerciseUpdateComponent';
import { DeleteOutlined } from '@ant-design/icons';
import { FormOutlined } from '@ant-design/icons';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import style from '../ExerciseSchedule.module.css';
import dispatchChangeExerciseName from '../ExerciseActions/dispatchChangeExerciseName';
import { useSelector } from 'react-redux';
import profileSelector from '../../../../../store/Selectors/profileSelector';
import { useFirebase } from 'react-redux-firebase';

function ExerciseActionComponent({ exercises, removeExercise, completeExercise, day }) {
  const profile = useSelector(profileSelector);
  const firebase = useFirebase();

  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    console.log(value);
    setEdit({
      id: null,
      value: '',
    });
    dispatchChangeExerciseName(edit.id, value.text, day, profile, firebase);
  };

  if (edit.id !== null) {
    return <ExerciseUpdateComponent edit={edit} onSubmit={submitUpdate} />;
  }

  return exercises ? exercises.map((exercise, index) => (
    <div
      className={exercise.isComplete ? style.complete : 'exercise-row'}
      key={index}
    >
      <Card
        size={'small'}
        style={{fontSize: 12}}
        actions={[
          <DeleteOutlined
            onClick={() => removeExercise(exercise.id)}
            className="delete-icon"
          />,
          <CheckCircleOutlined
            onClick={() => completeExercise(exercise.id)}
            className="complete-icon"
          />,
          <FormOutlined
            onClick={() => setEdit({ id: exercise.id, value: exercise.title })}
            className="edit-icon"
          />,
        ]}
      >
        <span
          className={style.text}
          onClick={() => completeExercise(exercise.id)}
        >
          {exercise.title}
        </span>
      </Card>
    </div>
  ))
  : <div />
}

export default ExerciseActionComponent;
