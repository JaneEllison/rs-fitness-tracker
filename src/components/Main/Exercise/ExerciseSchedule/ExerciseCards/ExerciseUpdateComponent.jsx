import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import style from '../ExerciseSchedule.module.css';

const ExerciseUpdateComponent = ({ edit, onSubmit }) => {
  const [input, setInput] = useState(edit.value);
  const myRef = React.createRef();
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const submitExerciseUpdate = (event) => {
    event.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
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
        type="text"
        placeholder="Update your exercise"
        value={input}
        name="text"
        onChange={handleChange}
      />
      <Button
        onClick={submitExerciseUpdate}
        type="primary"
        block
      >
        UPDATE
      </Button>
    </form>
  );
};

ExerciseUpdateComponent.propTypes = {
  edit: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ExerciseUpdateComponent;
