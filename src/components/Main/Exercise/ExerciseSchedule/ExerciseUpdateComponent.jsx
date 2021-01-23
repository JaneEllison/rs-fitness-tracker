import React, { useState } from 'react';
import { Input } from 'antd';

const ExerciseUpdateComponent = ({ edit, onSubmit }) => {
  const [input, setInput] = useState(edit ? edit.value : '');
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

  return (
    <form action="" onSubmit={submitExerciseUpdate}>
      {edit ? (
        <>
          <Input
            type="text"
            placeholder="Update your exercise"
            value={input}
            name="text"
            onChange={handleChange}
          />
          <button className="button-update">Update</button>
        </>
      ) : (
        <></>
      )}
    </form>
  );
};

export default ExerciseUpdateComponent;
