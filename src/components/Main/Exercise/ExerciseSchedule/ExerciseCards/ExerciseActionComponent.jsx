/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { Card } from 'antd';
import { DeleteOutlined, FormOutlined, CheckCircleOutlined } from '@ant-design/icons';
import dispatchChangeExerciseName from '../ExerciseActions/dispatchChangeExerciseName';
import profileSelector from '../../../../../store/Selectors/profileSelector';
import ExerciseUpdateComponent from './ExerciseUpdateComponent';
import style from '../ExerciseSchedule.module.css';

function ExerciseActionComponent({
  exercises,
  removeExercise,
  completeExercise,
  day,
}) {
  const profile = useSelector(profileSelector);
  const firebase = useFirebase();

  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    setEdit({
      id: null,
      value: '',
    });
    dispatchChangeExerciseName(edit.id, value.text, day, profile, firebase);
  };

  if (edit.id !== null) {
    return <ExerciseUpdateComponent edit={edit} onSubmit={submitUpdate} />;
  }

  if (!exercises) {
    return <div />;
  }

  return exercises.map((exercise, index) => {
    const keyProp = `exercise-${index}`;
    return (
      <div
        className={exercise.isComplete ? style.complete : 'exercise-row'}
        key={keyProp}
      >
        <Card
          size="small"
          style={{
            fontSize: 12,
          }}
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
    );
  });
}

export default ExerciseActionComponent;
