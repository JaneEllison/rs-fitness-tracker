import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { Card } from 'antd';
import { DeleteOutlined, FormOutlined, CheckCircleOutlined } from '@ant-design/icons';
import dispatchChangeExerciseName from '../ExerciseActions/dispatchChangeExerciseName';
import profileSelector from '../../../../../store/Selectors/profileSelector';
import ExerciseUpdateComponent from './ExerciseUpdateComponent';
import exerciseComponentConstants from '../../../../../constants/exerciseComponentConstants';
import style from '../ExerciseSchedule.module.css';

const {
  EXERCISE_ACTION_COMPONENT: {
    CARD_SIZE,
    DELETE_ICON_CLASS_NAME,
    COMPLETE_ICON_CLASS_NAME,
    EDIT_ICON_CLASS_NAME,
  },
} = exerciseComponentConstants;

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

  return exercises.map(({ isComplete, id, title }, index) => {
    const keyProp = `exercise-${index}`;
    return (
      <div
        className={isComplete ? style.complete : null}
        key={keyProp}
      >
        <Card
          size={CARD_SIZE}
          className={style.exerciseCard}
          actions={[
            <DeleteOutlined
              onClick={() => removeExercise(id)}
              className={DELETE_ICON_CLASS_NAME}
            />,
            <CheckCircleOutlined
              onClick={() => completeExercise(id)}
              className={COMPLETE_ICON_CLASS_NAME}
            />,
            <FormOutlined
              onClick={() => setEdit({ id, value: title })}
              className={EDIT_ICON_CLASS_NAME}
            />,
          ]}
        >
          <span
            className={style.text}
            onClick={() => completeExercise(id)}
          >
            {title}
          </span>
        </Card>
      </div>
    );
  });
}

ExerciseActionComponent.propTypes = {
  exercises: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExercise: PropTypes.func.isRequired,
  completeExercise: PropTypes.func.isRequired,
  day: PropTypes.string.isRequired,
};

export default ExerciseActionComponent;
