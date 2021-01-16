import React, { useState } from 'react';

const ExerciseUpdateComponent = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });

    setInput('');
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your exercise"
            value={input}
            name="text"
            onChange={handleChange}
          />
          <button>Update</button>
        </>
      ) : (
        <></>
      )}
    </form>
  );
};

export default ExerciseUpdateComponent;
