import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import exerciseComponentConstants from '../../../../../constants/exerciseComponentConstants';
import style from '../ExerciseSchedule.module.css';

const {
  EXERCISE_UPDATE_COMPONENT: {
    SUBMIT_ID_MULTIPLIER,
    INPUT_TYPE,
    INPUT_NAME,
    INPUT_PLACEHOLDER,
    BUTTON_TYPE,
    BUTTON_TEXT,
  },
} = exerciseComponentConstants;

const ExerciseUpdateComponent = ({ edit, onSubmit }) => {
  const [input, setInput] = useState(edit.value);
  const myRef = React.createRef();
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const submitExerciseUpdate = (event) => {
    event.preventDefault();
    if (input.trim() === '') return;

    onSubmit({
      id: Math.floor(Math.random() * SUBMIT_ID_MULTIPLIER),
      text: input,
      isComplete: false,
    });

    setInput('');
  };

  useEffect(() => {
    myRef.current.focus();
  }, [onSubmit]);

  return (
    <form onSubmit={submitExerciseUpdate}>
      <Input
        className={style.input_update}
        ref={myRef}
        type={INPUT_TYPE}
        placeholder={INPUT_PLACEHOLDER}
        value={input}
        name={INPUT_NAME}
        onChange={handleChange}
      />
      <Button
        onClick={submitExerciseUpdate}
        type={BUTTON_TYPE}
        block
      >
        {BUTTON_TEXT}
      </Button>
    </form>
  );
};

ExerciseUpdateComponent.propTypes = {
  edit: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ExerciseUpdateComponent;
