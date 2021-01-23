import React, { useState } from 'react';
import ExerciseUpdateComponent from './ExerciseUpdateComponent';
import { DeleteOutlined } from '@ant-design/icons';
import { FormOutlined } from '@ant-design/icons';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { exerciseUpdateAction } from '../../../../store/exerciseDataReducer/exerciseReducer/exerciseActionCreators';
import style from '../Style.css';
import { Card } from 'antd';

function ExerciseActionComponent({ exercises, removeExercise, completeExercise, day }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const dispatch = useDispatch();

  const submitUpdate = (value) => {
    setEdit({
      id: null,
      value: '',
    });

    dispatch(exerciseUpdateAction(edit.id, value, day));
  };

  if (edit.id) {
    return <ExerciseUpdateComponent edit={edit} onSubmit={submitUpdate} />;
  }

  return exercises.map((exercise, index) => (
    <div
      className={exercise.isComplete ? 'exercise-row complete' : 'exercise-row'}
      key={index}
    >
      <Card
        size={'small'}
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
            onClick={() => setEdit({ id: exercise.id, value: exercise.text })}
            className="edit-icon"
          />,
        ]}
      >
        <span
          className='exercise-text'
          style={style.complete}
          onClick={() => completeExercise(exercise.id)}
        >
          {exercise.text}
        </span>
      </Card>
    </div>
  ));
}

export default ExerciseActionComponent;
